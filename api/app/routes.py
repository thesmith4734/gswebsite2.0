import time
from flask import Flask
from app import app

@app.route('/time')
def get_current_time():
    return {'time': time.time()}