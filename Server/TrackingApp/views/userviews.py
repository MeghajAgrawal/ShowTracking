from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.http import JsonResponse
#from rest_framework.parsers import JSONparser

from TrackingApp.models import Anime,User
from TrackingApp.serializer import AnimeSerializer,UserSerializer
from TrackingApp.services import userservices

# User Model and API
def getUserInfo():
    
    pass

def postUserInfo():
    pass

def putUserInfo():
    pass

def deleteUserInfo():
    pass