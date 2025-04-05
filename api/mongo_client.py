import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv( dotenv_path="./.env.local")

MONGO_URL = os.environ.get("MONGO_URL", "mongo")
MONGO_UDERNAME = os.environ.get("MONGO_USERNAME", "root")
MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD", "")
MONGO_PORT = os.environ.get("MONGO_PORT", 27017)


mongo_client = MongoClient(
  host=MONGO_URL,
  username=MONGO_UDERNAME,
  password=MONGO_PASSWORD,
  port=MONGO_PORT,
)

def insert_test_document():
  """ Insert test document to mongo for testing"""
  db= mongo_client.test
  test_collection =db.test_collection
  res = test_collection.insert_one({"test": "Vasyl","instructor": "Vasyl"})
  print(res)