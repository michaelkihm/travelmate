import json


def add_countries(apps, schema_editor):
    """
    Read geojson file and add all countries to Country model
    """
    Country = apps.get_model("api", "Country")
    geojson_path = '../frontend/src/assets/countries.json'

    with open(geojson_path) as json_file:
        data = json.load(json_file)
        for feature in data['features']:
            country = feature['properties']['ADMIN']
            entry = Country(name=country)
            entry.save()
