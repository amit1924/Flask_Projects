from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
)
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from config import Config
from bson.objectid import ObjectId
from flask_cors import CORS

# Initialize Flask app and load configurations
app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS for the entire app
CORS(app)

# Set up MongoDB
client = MongoClient(app.config["MONGO_URI"])
db = client.flask_jwt_mongo
users_collection = db.users

# Set up JWT and Bcrypt
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


# Register route
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if users_collection.find_one({"email": email}):
        return jsonify({"message": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    user = {"username": username, "email": email, "password": hashed_password}
    users_collection.insert_one(user)
    return jsonify({"message": "User registered successfully!"}), 201


# Login route
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    # Check if the user exists in the database
    user = users_collection.find_one({"email": email})

    if not user:
        return jsonify({"message": "User does not exist"}), 404

    # Check if the password is correct
    if user and bcrypt.check_password_hash(user["password"], password):
        access_token = create_access_token(identity=str(user["_id"]))
        return jsonify({"access_token": access_token}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401


# Protected route (dashboard)
@app.route("/dashboard", methods=["GET"])
@jwt_required()
def dashboard():
    current_user_id = get_jwt_identity()
    user = users_collection.find_one({"_id": ObjectId(current_user_id)})

    if user:
        return (
            jsonify(
                {
                    "message": f'Welcome {user["username"]} to your dashboard',
                    "username": user["username"],
                    "email": user["email"],
                }
            ),
            200,
        )
    else:
        return jsonify({"message": "User not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)
