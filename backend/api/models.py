from django.contrib.auth.models import User
from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return f"{self.name}"


class Interest(models.Model):
    interest = models.CharField(max_length=100)

    def __str__(self) -> str:
        return f"{self.interest}"


class UserAcc(User):
    follows = models.ManyToManyField(
        "self", symmetrical=False, related_name="related_to+", blank=True)
    friends = models.ManyToManyField(
        "self", symmetrical=False, blank=True)
    interests = models.ManyToManyField(
        Interest, symmetrical=False, blank=True)
    home_country = models.ForeignKey(Country, on_delete=models.PROTECT)
    was_here = models.ManyToManyField(
        Country, symmetrical=False, blank=True, related_name="was_here+")
    will_go = models.ManyToManyField(
        Country, symmetrical=False, blank=True, related_name="will_go+")

    # def __str__(self) -> str:
    #     return f"{self.username}"


class Post(models.Model):
    user = models.ForeignKey(UserAcc, on_delete=models.CASCADE)
    content = models.TextField(max_length=300)
    date = models.DateField(auto_now_add=True)
    likes = models.ManyToManyField(
        UserAcc, symmetrical=False, blank=True, related_name="likes+")

    def __str__(self) -> str:
        return f"{self.user} {self.content} {self.date}"


class NextTravel(models.Model):
    user = models.ForeignKey(UserAcc, on_delete=models.CASCADE)
    where = models.ForeignKey(Country, on_delete=models.CASCADE)
    starting = models.DateField(auto_now=False, blank=False)
    until = models.DateField(auto_now=False, blank=False)

    def __str__(self) -> str:
        return f"{self.user}: {self.where} from {self.starting} to {self.until}"
