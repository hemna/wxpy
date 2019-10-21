# -*- coding: utf-8 -*-
"""weather model module."""
from sqlalchemy import *
from sqlalchemy.orm import relationship, backref

from sqlalchemy import CHAR, Column, DECIMAL, Date, DateTime, Float, Index
from sqlalchemy import String, TIMESTAMP, Table, Text, Time, text
from sqlalchemy.dialects.mysql import INTEGER, LONGTEXT, SMALLINT, TINYINT
from sqlalchemy.ext.declarative import declarative_base

from wxhemnacom.model import DeclarativeBase, metadata, DBSession

from sqlalchemy.ext.declarative import as_declarative

@as_declarative()
class Base:
    def _asdict(self):
        return {c.key: getattr(self, c.key)
                for c in inspect(self).mapper.column_attrs}

class Weather(Base):
    __tablename__ = 'weather'

    datetime = Column(DateTime, primary_key=True, unique=True,
                      server_default=text("'0000-00-00 00:00:00'"))
    temp_in = Column(DECIMAL(4, 1), nullable=False,
                     server_default=text("'0.0'"))
    temp_out = Column(DECIMAL(4, 1), nullable=False,
                      server_default=text("'0.0'"))
    dewpoint = Column(DECIMAL(4, 1), nullable=False,
                      server_default=text("'0.0'"))
    rel_hum_in = Column(TINYINT(3), nullable=False, server_default=text("'0'"))
    rel_hum_out = Column(TINYINT(3), nullable=False, server_default=text("'0'"))
    wind_speed = Column(DECIMAL(5, 2), index=True, server_default=text("'0.00'"))
    wind_angle = Column(DECIMAL(5, 2), server_default=text("'0.00'"))
    wind_direction = Column(CHAR(3), nullable=False, server_default=text("''"))
    wind_chill = Column(DECIMAL(4, 1), nullable=False, server_default=text("'0.0'"))
    rain_1h = Column(DECIMAL(3, 2), server_default=text("'0.00'"))
    rain_24h = Column(DECIMAL(3, 2), server_default=text("'0.00'"))
    rain_total = Column(DECIMAL(5, 2), index=True, server_default=text("'0.00'"))
    rel_pressure = Column(DECIMAL(5, 2), server_default=text("'0.00'"))
    tendency = Column(String(7), nullable=False, server_default=text("''"))
    forecast = Column(String(6), nullable=False, server_default=text("''"))


class WeatherDailyAgg(DeclarativeBase):
    __tablename__ = 'weather_daily_agg'

    datetime = Column(DateTime, primary_key=True, unique=True, server_default=text("'2000-01-01 00:00:00'"))
    max_temp_in = Column(DECIMAL(4, 1), nullable=False, server_default=text("'0.0'"))
    low_temp_in = Column(DECIMAL(4, 1), nullable=False, server_default=text("'0.0'"))
    max_temp_in_time = Column(DateTime, nullable=False, server_default=text("'2000-01-01 00:00:00'"))
    max_temp_out = Column(DECIMAL(4, 1), nullable=False, server_default=text("'0.0'"))
    low_temp_out = Column(DECIMAL(4, 1), nullable=False, server_default=text("'0.0'"))
    max_temp_out_time = Column(DateTime, nullable=False, server_default=text("'2000-01-01 00:00:00'"))
    max_wind_speed = Column(DECIMAL(5, 2), server_default=text("'0.00'"))
    max_wind_angle = Column(DECIMAL(5, 2), server_default=text("'0.00'"))
    max_wind_speed_time = Column(DateTime, nullable=False, server_default=text("'2000-01-01 00:00:00'"))
    rainfall = Column(DECIMAL(5, 2), server_default=text("'0.00'"))

__all__ = ['Weather', 'WeatherDailyAgg']
