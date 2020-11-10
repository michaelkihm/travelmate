from rest_framework import generics
from .models import UserAcc, Post
from .serializers import UserSerializer, PostSerializer


class ListUser(generics.ListAPIView):
    queryset = UserAcc.objects.all()
    serializer_class = UserSerializer


class DetailUser(generics.RetrieveAPIView):
    queryset = UserAcc.objects.all()
    serializer_class = UserSerializer


class ListPost(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class DetailPost(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
