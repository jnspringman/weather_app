from flask import Flask

from config import Config


def create_app(config=Config):
    app = Flask(__name__)
    app.config.from_object(config)

    with app.app_context():
        from . import routes

        return app