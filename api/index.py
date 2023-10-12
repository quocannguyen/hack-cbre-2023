from flask import Flask, request
from dataframe import users, dashboards, property_insights
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel


app = Flask(__name__)

@app.route("/api/signin", methods=["POST"])
def signIn():
    email = request.json["email"]
    password = request.json["password"]
    return list(
        users.loc[users["Email"] == email].sort_values("User Activity", ascending=False).values.tolist()
    )

@app.route("/api/getinsights", methods=["POST"])
def getInsights():
    property_address = request.json["location"]
    account = request.json["client"]
    return list(
        property_insights.loc[
            (property_insights["Property Address"] == property_address) &
            (property_insights["Account"] == account)
        ].sort_values("Criticality", ascending=False).values.tolist()
    )

@app.route("/api/getrecommendations", methods=["POST"])
def get_recommendations():
    username = request.json["username"]
    user_data = users[users['Name'] == username]

    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform(
        user_data['User Activity'].astype(str))
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

    user_index = 0
    similarity_scores = cosine_sim[user_index]
    similar_activities_indices = similarity_scores.argsort()[::-1]
    similar_activities = user_data.iloc[similar_activities_indices]
    recommended_data = similar_activities[[
        'Name', 'Role', 'Dashboard', 'User Activity']]

    return list(recommended_data.sort_values('User Activity', ascending=False))

if __name__ == "__main__":
    app.run(debug=True)