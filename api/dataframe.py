import pandas

roles_duties_insights = pandas.read_csv('./api/data/roles_duties_and_insights.csv')
property_insights = pandas.read_csv('./api/data/property_insights_extended.csv')
property_insights["Property Address"] = property_insights["Property Address"].apply(lambda address: address.split(', ')[1])
property_insights["Criticality"] = property_insights["Criticality"].map({
    "Critical": 3,
    "High": 2,
    "Medium": 1,
    "Low": 0
})
users = pandas.read_csv('./api/data/recommendation_engine_users.csv')
dashboards = users["Dashboard"].unique()