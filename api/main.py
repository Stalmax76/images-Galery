# save this as app.py
# пакет для читання файлу .env приховані ключі які не попадають в репозиторій
import os
# пакет для взаємодії з api
import requests
# пакет робочий сервер
from flask import Flask, request
# пакет для читання файлу .env
from dotenv import load_dotenv
# розширений дозвіл на взаємодію між різними доменами
from flask_cors import CORS
# пакет для взаємодії з mongo
# from mongo_client import insert_test_document

# завантаження файлу .env
load_dotenv( dotenv_path="./.env.local")

# змінні
UNSPLASH_URL = "https://api.unsplash.com/photos/random"
# встановлення ключа з фаєлу .env
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", "")
# встановлення режиму роботи дебагера, для автоматичного оновлення сторінки
DEBUG=bool(os.environ.get("DEBUG", True))

# перевірка на наявність ключа
if not UNSPLASH_KEY:
    raise EnvironmentError("You need to create .env.local file and insert UNSPLASH_KEY there")

# робочий сервер
app = Flask(__name__)
# дозвіл на взаємодію між різними доменами
CORS(app)
# встановлення режиму роботи дебагера
app.config["DEBUG"] = DEBUG


# запуск функції для заповнення бази даних
# insert_test_document()
# запит до api
@app.route("/new-image")
# приймаємо параметри
def new_image():
    word = request.args.get("query")
    # налаштування хедера
    headers= {
        "Accept-Version": "v1",
        "Authorization": f"Client-ID {UNSPLASH_KEY}"
    }
    # встановлення параметрів
    params= {"query":word}
    # відправляємо запит
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    # отримуємо дані
    data = response.json()
    # повертаємо дані
    return data
   

# запуск сервера
if __name__ == "__main__":
    # запуск сервера з дебагером в режимі роботи з налаштуванням домена 0.0.0.0 та портом 5000
    app.run(host="0.0.0.0", port=5000, debug=True)





