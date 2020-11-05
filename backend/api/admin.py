from django.contrib import admin
from .models import Country, Interest, UserAcc, Post, NextTravel

admin.site.register(Country)
admin.site.register(Interest)
admin.site.register(UserAcc)
admin.site.register(Post)
admin.site.register(NextTravel)
