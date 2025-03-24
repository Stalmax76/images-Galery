# save this as app.py
import requests
from flask import Flask, request



app = Flask(__name__)


@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers= {
        "Accept-Version": "v1",
        "Authorization": f"Client-ID {UNSPLASH_KEY}"
    }
    params= {
        "query":word
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data
   


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
# def hello():
    # return "Hello, Vasyl!"




