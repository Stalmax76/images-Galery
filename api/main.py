# save this as app.py
# пакет для читання файлу .env приховані ключі які не попадають в репозиторій
import os
# пакет для взаємодії з api
import requests
# пакет робочий сервер
from flask import Flask, request, jsonify
# пакет для читання файлу .env
from dotenv import load_dotenv
# розширений дозвіл на взаємодію між різними доменами
from flask_cors import CORS
# пакет для взаємодії з mongo
# from mongo_client import insert_test_document
from mongo_client import mongo_client

gallery = mongo_client.gallery
images_collection = gallery.images

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

@app.route("/images", methods=["GET", "POST"])
def images():
    if request.method == "GET":
        # read images from database
        images = images_collection.find({})
        return jsonify([img for img in images])
    if request.method == "POST":
        # save image to database
        image = request.get_json()
        image["_id"] = image.get("id")
        result = images_collection.insert_one(image)
        insered_id = result.inserted_id
        return {"inserted_id":insered_id}
        

@app.route("/images/<image_id>", methods=["DELETE"])
def image(image_id):
    if request.method == "DELETE":
        # delete image from database
        result = images_collection.delete_one({"_id":image_id})
        if not result:
            return{"error": "Image was't deleted. Please try again"}, 500
        if result and not result.deleted_count:
            return {"error":"Image not found"}, 404
        return {"deleted_id":image_id}
   
   

   

# запуск сервера
if __name__ == "__main__":
    # запуск сервера з дебагером в режимі роботи з налаштуванням домена 0.0.0.0 та портом 5000
    app.run(host="0.0.0.0", port=5000)





