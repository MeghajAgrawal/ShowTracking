from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db.models import Q
from rest_framework.parsers import JSONParser


from TrackingApp.models import Anime,User
from TrackingApp.serializer import AnimeSerializer,UserSerializer
from TrackingApp.services import userservices

# User Model and API
@csrf_exempt
def userAPI(request):
    if request.method == 'GET':
        data = getUserInfo(request)
    if request.method == 'POST':
        data = postUserInfo(request)
    if request.method == 'PUT':
        data = putUserInfo(request)
    if request.method == 'DELETE':
        data = deleteUserInfo(request)
    return data

@csrf_exempt
def loginUser(request):
    data = JSONParser().parse(request)
    status = userservices.loginUser(data)
    return status

def getUserInfo(request):
    user_id = request.GET.get('user_id')
    data = userservices.getUserInfo(user_id)
    return data

def postUserInfo(request):
    data = JSONParser().parse(request)
    status = userservices.postUserInfo(data)
    return status

def putUserInfo(request):
    data = JSONParser().parse(request)
    status = userservices.putUserInfo(data)
    return status

def deleteUserInfo(request):
    userID = request.GET.get('user_id')
    status = userservices.deleteUserInfo(userID)
    return status