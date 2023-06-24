from TrackingApp.models import Anime
from TrackingApp.thirdparty import jikangateway
from TrackingApp.database import dbcommands
from TrackingApp.serializer import AnimeSerializer
from django.http import HttpResponse

def getAnimesByName(name):
    data = jikangateway.getAnimesByName(name)
    return data

def getAnimeByID(id):
    data = jikangateway.getAnimeByID(id)
    print("SERVICE:", data)
    return data

def getAnimeListByUserID(userID):
    data = dbcommands.getAnimeList(userID)    
    return data

def addAnime(data):
    if not(Anime.objects.filter(anime_id = data.get('anime_id')).exists()):
        #print(Anime.objects.filter(anime_id = data.get('anime_id')).exists())
        animeData = (jikangateway.getAnimeByID(data.get('anime_id')))
        animeError = dbcommands.insertAnime(animeData)
        if not animeError:
            return HttpResponse(status=404)
        episodeError = addEpisode(data.get('anime_id'))
        if not episodeError:
            return HttpResponse(status=404)
    
    useranimeError = dbcommands.addUserAnimeRelation(data)
    if useranimeError:
        return HttpResponse( status=200)
    return HttpResponse(status=204) 

def deleteAnime(data):
    status = dbcommands.deleteUserAnimeRelation(data)
    if(status):
        return HttpResponse(status=200)

def addEpisode(id):
    episodeData = jikangateway.getEpisodes(id)
    episodeError = dbcommands.insertEpisode(episodeData)
    return episodeError

def addEpisodeRelation(data):
    status = dbcommands.addUserAnimeEpisodeRelation(data)
    if status:
        return HttpResponse(status=200)
    return HttpResponse(status=404)

def deleteEpisode(data):
    status = dbcommands.deleteUserAnimeEpisodeRelation(data)
    if status:
        return HttpResponse(status=200)
    return HttpResponse(status=404)