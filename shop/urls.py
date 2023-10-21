from .views import *
from django.urls import path

urlpatterns = [
    path('', homepage, name='home'),
    path('card/', card, name='card'),
]