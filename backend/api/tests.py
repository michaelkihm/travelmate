from django.http import response
from .models import UserAcc, Country
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
import json

italy_str = "Italy"
spain_str = "Spain"
germany_str = 'Germany'
usa_str = 'USA'

PASSWORD = 'test'
USERNAME = 'BigBob'


class TestUserRoute(APITestCase):
    @classmethod
    def setUpTestData(cls):
        # create countries
        usa = Country.objects.create(name=usa_str)
        germany = Country.objects.create(name=germany_str)
        spain = Country.objects.create(name=spain_str)
        italy = Country.objects.create(name=italy_str)

        # create user
        user = UserAcc.objects.create_user(
            first_name='Big', last_name='Bob', username=USERNAME, password=PASSWORD, home_country=usa)
        user.was_here.add(italy)
        user.will_go.add(germany)
        user.will_go.add(spain)

    def test_home_country_field(self):
        user = UserAcc.objects.get(id=1)
        home_country = user.home_country.name
        self.assertEqual(home_country, usa_str)

    def test_no_logged_user(self):
        url = '/api/users/1'
        expected_reponse = {
            "detail": "Authentication credentials were not provided."}

        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertJSONEqual(json.dumps(response.data, sort_keys=True),
                             json.dumps(expected_reponse, sort_keys=True))

    def test_logged_in_user(self):

        self.client.post('/api/auth/login/', {'username': USERNAME,
                                              'email': '', 'password': PASSWORD}, format='json')
        url = '/api/users/1'
        json_response = {'id': 1, 'username': "BigBob", 'follows': [
        ], 'friends': [], 'interests': [], 'home_country': usa_str, 'was_here': [italy_str], 'will_go': [germany_str, spain_str]}

        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertJSONEqual(json.dumps(response.data, sort_keys=True),
                             json.dumps(json_response, sort_keys=True))
