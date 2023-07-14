from TrackingApp.models import User
from TrackingApp.serializer import UserSerializer
from TrackingApp.database import dbcommands
from django.http import HttpResponse, JsonResponse

def loginUser(data):
    print(data)
    if( User.objects.filter(username = data['username']).exists()):
        userData = User.objects.get(username = data['username'])
        #print(userData)
        if userData:
            userSerializedData = UserSerializer(userData)
            if userSerializedData.data['password'] == data['password']:
                userInfo = {"user_id": userSerializedData.data['user_id']}
                return JsonResponse(userInfo,safe=False)
    return HttpResponse(status = 400)

def getUserInfo(user_id):
    userData = User.objects.get(user_id = user_id)
    if userData:
        userSerializedData = UserSerializer(userData)
    userInfo = {'name':userSerializedData.data['name'],
                'username':userSerializedData.data['username'],
                'email':userSerializedData.data['email'],
                'dob':userSerializedData.data['dob']
                }
    return JsonResponse(userInfo,safe=False)

def postUserInfo(data):
    if not(User.objects.filter(username = data['username']).exists()):
        userError = dbcommands.addUser(data)
        if userError:
            return HttpResponse(status = 200)
        return HttpResponse(status = 204)
    return HttpResponse(status = 400)

def putUserInfo(data):
    if (User.objects.filter(user_id = data['user_id']).exists()):
        userError = dbcommands.updateUser(data)
        if userError:
            return HttpResponse(status=200)
    return HttpResponse(status = 400)

def deleteUserInfo(userID):
    userError = dbcommands.deleteUser(userID)
    if userError:
        return HttpResponse(status=200)
    return HttpResponse(status = 404)