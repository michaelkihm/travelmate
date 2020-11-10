from rest_framework import serializers
from .models import NextTravel, UserAcc, Country, Interest, NextTravel, Post


class CoutrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Country
        fields = ('id', 'name')


class CountryNameSerializer(serializers.RelatedField):

    def to_representation(self, value):
        return value.name

    class Meta:
        model = Country


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('id', 'interest')


class InterestNameSerializer(serializers.RelatedField):

    def to_representation(self, value):
        return value.interest

    class Meta:
        model = Interest


class NextTravelSerializer(serializers.ModelSerializer):
    class Meta:
        model = NextTravel
        fields = ('id', 'user', 'where', 'starting', 'until')


class UserSerializer(serializers.ModelSerializer):
    was_here = CountryNameSerializer(many=True, read_only=True)
    will_go = CountryNameSerializer(many=True, read_only=True)
    home_country = CountryNameSerializer(many=False, read_only=True)
    interests = InterestNameSerializer(many=True, read_only=True)

    class Meta:
        model = UserAcc
        fields = ('id', 'username', 'follows', 'friends',
                  'interests', 'home_country', 'was_here', 'will_go')


class UserNameSerializer(serializers.RelatedField):

    def to_representation(self, value):
        return value.username

    class Meta:
        model = UserAcc


class PostSerializer(serializers.ModelSerializer):
    user = UserNameSerializer(many=False, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'user', 'content', 'date', 'likes')
