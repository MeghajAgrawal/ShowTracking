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
        print(Anime.objects.filter(anime_id = data.get('anime_id')).exists())
        animeData = (jikangateway.getAnimeByID(data.get('anime_id')))
        animeStatus = dbcommands.insertAnime(animeData)
        if not(animeStatus):
            return HttpResponse("404 : Error")
        episodeData = (jikangateway.getEpisodes(data.get('anime_id')))
        episodeStatus = dbcommands.insertEpisode(episodeData)
        if not(episodeStatus):
            return HttpResponse("404 : Error")
            
    useranimeStatus = dbcommands.addUserAnimeRelation(data)
    if(useranimeStatus):
        return HttpResponse("200: User Anime Relation created")
    return HttpResponse("400 : Error") 

def deleteAnime(data):
    status = dbcommands.deleteUserAnimeRelation(data)
    if(status):
        return HttpResponse("200: Successfully Deleted Anime and User relation")

def addEpisode(data):
    status = dbcommands.addUserAnimeEpisodeRelation(data)
    if status:
        return HttpResponse("200 : Adding new watched episode relation")
    return HttpResponse("404: Error")

def deleteEpisode(data):
    status = dbcommands.deleteUserAnimeEpisodeRelation(data)
    if status:
        return HttpResponse("200 : Deleted watched episode relation")
    return HttpResponse("404: Error")