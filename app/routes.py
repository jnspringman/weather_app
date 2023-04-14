from pyowm.owm import OWM
from flask import current_app, render_template


@current_app.route('/')
def home():
    return render_template('index.jinja2.html')


if __name__ == '__main__':
    owm = OWM('d9f5f52ec674d54bcaca885c0c63720b')
    reg = owm.city_id_registry()

    san_diegos = reg.ids_for('San Diego', country='US', state='CA', matching='exact')
    mgr = owm.weather_manager()
    weather = mgr.weather_at_place('San Diego,CA,US').weather
    print(type(weather.sunrise_time(timeformat='date')))
