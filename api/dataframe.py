import pandas

roles_duties_insights = pandas.read_csv('./api/data/roles_duties_and_insights.csv')
property_insights = pandas.read_csv('./api/data/property_insights_extended.csv')
users = pandas.read_csv('./api/data/recommendation_engine_users.csv')
dashboards = users["Dashboard"].unique()