from .models import UserAcc, Country
from rest_framework.test import APITestCase
from rest_framework import status
import json

italy_str = "Italy"
spain_str = "Spain"
germany_str = 'Germany'
usa_str = 'USA'


class TestUserRoute(APITestCase):
    @classmethod
    def setUpTestData(cls):
        # create countries
        usa = Country.objects.create(name=usa_str)
        germany = Country.objects.create(name=germany_str)
        spain = Country.objects.create(name=spain_str)
        italy = Country.objects.create(name=italy_str)

        # create user
        user = UserAcc.objects.create(
            first_name='Big', last_name='Bob', username='BigBob', home_country=usa)
        user.was_here.add(italy)
        user.will_go.add(germany)
        user.will_go.add(spain)

    def test_list_home_country_field(self):
        user = UserAcc.objects.get(id=1)
        home_country = user.home_country.name
        self.assertEqual(home_country, usa_str)

    def test_user_route(self):
        url = '/api/users/1'
        json_response = {'id': 1, 'username': "BigBob", 'follows': [
        ], 'friends': [], 'interests': [], 'home_country': usa_str, 'was_here': [italy_str], 'will_go': [germany_str, spain_str]}

        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertJSONEqual(json.dumps(response.data, sort_keys=True),
                             json.dumps(json_response, sort_keys=True))
