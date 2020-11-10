from django.urls import path, re_path
from .views import DetailUser, ListUser, ListPost, DetailPost

app_name = 'API'

urlpatterns = [
    path('users/<int:pk>', DetailUser.as_view()),
    path('users/', ListUser.as_view()),
    path('posts/', ListPost.as_view()),
    path('posts/<int:pk>', DetailPost.as_view())
]
