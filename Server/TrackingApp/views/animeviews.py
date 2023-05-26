from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import serializers

from TrackingApp.models import Anime,User,Episode
from TrackingApp.serializer import AnimeSerializer,UserSerializer,EpisodeSerializer
from TrackingApp.services import animeservices

# Create your views here.

# Anime Model and APIs 
# Get Anime List with filter    
@csrf_exempt
def animeAPI(request):
    if request.method == 'GET':
        data = getAnimesByName(request)
    elif request.method == 'POST':
        data = postAnime(request)
    else:
        pass
    return data

def getAnimesByName(request):
    name = request.GET.get('name')
    data = animeservices.getAnimesByName(name)
    print(data)
    return JsonResponse(data,safe=False)

# Get Anime By Id
def getAnimeByID(request,id):
    if request.method == 'GET':
        data = animeservices.getAnimeByID(id)
        print(data)
        return JsonResponse(data,safe=False)
    pass

def displayAnimeList(request):
    # Needs User ID
    if request.method == 'GET':
        animes = Anime.objects.all()
        anime_serializer = AnimeSerializer(animes, many=True)
        return JsonResponse(anime_serializer.data,safe=False)
    pass

def displayAnimeEpisodes(request,id):
    if request.method == 'GET':
        episodes = Episode.objects.filter(anime_id = id)
        episode_serializer = EpisodeSerializer(episodes, many= True)
        return JsonResponse(episode_serializer.data,safe=False)


def postAnime(request):
    # Add anime to personal list
    # Needs User ID
    if request.method == 'POST':
        data = JSONParser().parse(request)
        status = animeservices.addAnime(data)
    return status
    pass

def deleteAnime(request):
    # Delete Anime from personal list
    # Needs User ID
    pass




