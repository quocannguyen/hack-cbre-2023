from flask import Flask, request
from dataframe import users, dashboards


app = Flask(__name__)

@app.route("/api/signin", methods=["POST"])
def signIn():
    email = request.json["email"]
    password = request.json["password"]
    print(dashboards)
    return list(
        users.loc[users["Email"] == email].sort_values("User Activity", ascending=False).values.tolist()
    )

if __name__ == "__main__":
    app.run(debug=True)