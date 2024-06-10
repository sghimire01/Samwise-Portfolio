from flask import Flask
import yfinance as yf
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

global period 
period = "5d"

@app.route('/')
def home_page():
    return 'Test'

@app.route('/stocks/<ticker>')
def get_stock_data(ticker):
    stock = yf.Ticker(ticker)
    hist = stock.history(period=period)
    return hist.to_json()
