# -*- coding: utf-8 -*-
"""Main Controller"""

from tg import expose, flash, require, url, lurl
from tg import request, redirect, tmpl_context
from tg.i18n import ugettext as _, lazy_ugettext as l_
from tg.exceptions import HTTPFound
from tg import predicates
from wxhemnacom import model
from wxhemnacom.controllers.secure import SecureController
from wxhemnacom.model import DBSession
from tgext.admin.tgadminconfig import BootstrapTGAdminConfig as TGAdminConfig
from tgext.admin.controller import AdminController
from tgext.crud import EasyCrudRestController
from sqlalchemy.sql import func
from datetime import datetime

from wxhemnacom.lib.base import BaseController
from wxhemnacom.controllers.error import ErrorController
from wxhemnacom.model.weather import Weather, WeatherDailyAgg

__all__ = ['RootController']

class APIController(EasyCrudRestController):
    pagination = False
    json_dictify = True
    model = Weather

    def _before(self, *args, **kw):
        if request.response_type != 'application/json':
            abort(406, 'Only JSON requests are supported')

        super(APIController, self)._before(*args, **kw)

class RootController(BaseController):
    """
    The root controller for the wx.hemna.com application.

    All the other controllers and WSGI applications should be mounted on this
    controller. For example::

        panel = ControlPanelController()
        another_app = AnotherWSGIApplication()

    Keep in mind that WSGI applications shouldn't be mounted directly: They
    must be wrapped around with :class:`tg.controllers.WSGIAppController`.

    """
    secc = SecureController()
    admin = AdminController(model, DBSession, config_type=TGAdminConfig)

    error = ErrorController()

    def _before(self, *args, **kw):
        tmpl_context.project_name = "wxhemnacom"

    @expose('wxhemnacom.templates.hello')
    def hello(self, person=None):
        return dict(person=person)

    @expose('wxhemnacom.templates.wx')
    @expose('json')
    def wx(self):
        data = self._cc_data()
        return dict(page='wx', data=data)

    def _dateymd(self):
        return datetime.today().strftime('%Y-%m-%d')

    def _cc_data(self):
        # get latest conditions
        date_ymd = self._dateymd()
        date_ymd = "2019-10-20%"
        cc = DBSession.query(Weather).order_by(Weather.datetime.desc()).first()
        data = cc._asdict()
        # get Low and High temp for the day
        # Select min(temp_out) as low, max(temp_out) as high from weather where datetime like :date
        lowhigh = DBSession.query(
            func.min(Weather.temp_out).label('low'),
            func.max(Weather.temp_out).label('high'),
                                  ).filter(Weather.datetime.like(date_ymd)).first()
        data.update(lowhigh._asdict())

        # Get the rain_total for the year
        year = datetime.today().strftime('%Y')
        current_year = "{}%".format(year)
        # Get the rain total at the start of the current year
        raintotal_start = DBSession.query(
            Weather.rain_total).filter(
                Weather.datetime.like(current_year)).order_by(
                    Weather.datetime.asc()).first()

        year_start_rain = raintotal_start[0]
        print(year_start_rain)
        print(raintotal_start._asdict())
        ytd_rain = data['rain_total'] - year_start_rain
        return data

    @expose('wxhemnacom.templates.wx_current_conditions')
    @expose('json')
    def wxcc(self):
        data = self._cc_data()
        return dict(page='wxcc', data=data)

    @expose('wxhemnacom.templates.wx_webcam')
    def wxcam(self):
        data = dict()
        return dict(page='wxcam', data=data)

    @expose('wxhemnacom.templates.wx_camtimelapse')
    def wxtimelapse(self):
        data = dict()
        return dict(page='wxtimelapse', data=data)

    @expose('wxhemnacom.templates.index')
    def index(self):
        """Handle the front-page."""
        return dict(page='index')

    @expose('wxhemnacom.templates.about')
    def about(self):
        """Handle the 'about' page."""
        return dict(page='about')

    @expose('wxhemnacom.templates.environ')
    def environ(self):
        """This method showcases TG's access to the wsgi environment."""
        return dict(page='environ', environment=request.environ)

    @expose('wxhemnacom.templates.data')
    @expose('json')
    def data(self, **kw):
        """
        This method showcases how you can use the same controller
        for a data page and a display page.
        """
        return dict(page='data', params=kw)

    @expose('wxhemnacom.templates.index')
    @require(predicates.has_permission('manage', msg=l_('Only for managers')))
    def manage_permission_only(self, **kw):
        """Illustrate how a page for managers only works."""
        return dict(page='managers stuff')

    @expose('wxhemnacom.templates.index')
    @require(predicates.is_user('editor', msg=l_('Only for the editor')))
    def editor_user_only(self, **kw):
        """Illustrate how a page exclusive for the editor works."""
        return dict(page='editor stuff')

    @expose('wxhemnacom.templates.login')
    def login(self, came_from=lurl('/'), failure=None, login=''):
        """Start the user login."""
        if failure is not None:
            if failure == 'user-not-found':
                flash(_('User not found'), 'error')
            elif failure == 'invalid-password':
                flash(_('Invalid Password'), 'error')

        login_counter = request.environ.get('repoze.who.logins', 0)
        if failure is None and login_counter > 0:
            flash(_('Wrong credentials'), 'warning')

        return dict(page='login', login_counter=str(login_counter),
                    came_from=came_from, login=login)

    @expose()
    def post_login(self, came_from=lurl('/')):
        """
        Redirect the user to the initially requested page on successful
        authentication or redirect her back to the login page if login failed.

        """
        if not request.identity:
            login_counter = request.environ.get('repoze.who.logins', 0) + 1
            redirect('/login',
                     params=dict(came_from=came_from, __logins=login_counter))
        userid = request.identity['repoze.who.userid']
        flash(_('Welcome back, %s!') % userid)

        # Do not use tg.redirect with tg.url as it will add the mountpoint
        # of the application twice.
        return HTTPFound(location=came_from)

    @expose()
    def post_logout(self, came_from=lurl('/')):
        """
        Redirect the user to the initially requested page on logout and say
        goodbye as well.

        """
        flash(_('We hope to see you soon!'))
        return HTTPFound(location=came_from)
