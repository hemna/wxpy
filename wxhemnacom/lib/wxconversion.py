

class WXConversion(object):
    @staticmethod
    def f_to_c(temperature):
        """ Convert Fahrenheit to Celsius."""
        return "{0:0.1f}".format((temperature - 32) / 1.8)

    @staticmethod
    def c_to_f(temperature):
        """ Convert Celsius to Fahrenheit."""
        return "{0:0.1f}".format((temperature * 1.8) + 32)

    @staticmethod
    def c_to_k(temperature):
        """ Convert Celsius to Kelvin. """
        return "{0:0.1f}".format(temperature + 273.15)

    @staticmethod
    def k_to_c(temperature):
        """ Convert Kelvin to Celsius. """
        return "{0:0.1f}".format(273.15 - temperature)

    @staticmethod
    def f_to_k(temperature):
        """ Convert Fahrenheit to Kelvin."""
        return WXConversion.c_to_k(WXConversion.f_to_c(temperature))

    @staticmethod
    def k_to_f(temperature):
        """ Convert Kelvin to Fahrenheit."""
        return WXConversion.c_to_f(WXConversion.k_to_c(temperature))

    @staticmethod
    def in_to_mb(pressure):
        """ Convert Inches of Mercury to Millibars. """
        return "{0:0.2f}".format(pressure * 33.8638)

    @staticmethod
    def mb_to_in(pressure):
        """ Convert Millibars to Inches Mercury """
        return "{0:0.2f}".format(pressure / 33.8638)

    @staticmethod
    def mph_to_knots(speed):
        """ Convert Miles Per Hour to Knots. """
        return "{0:0.2f}".format(speed*0.868976242)
