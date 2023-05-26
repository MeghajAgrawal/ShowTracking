from django.db.models import Q

from TrackingApp.serializer import AnimeSerializer,EpisodeSerializer,UserAnimeRelationSerializer
from TrackingApp.models import UserAnimeRelation
## Anime Commands

def insertAnime(animeData):
    aData = AnimeSerializer(data=animeData)
    #print(aData)
    try:
        if aData.is_valid():
            aData.save()
            return True
    except Exception as e:
        return e

def deleteAnime():
    print()

## Episode Commands

def insertEpisode(episodeData):
    try:
        for episode in  episodeData:
            eData = EpisodeSerializer(data = episode)
            if eData.is_valid():
                eData.save()
        return True
    except Exception as e:
        return e


def updateEpisode():
    pass

def addUserAnimeRelation(data):
    try:
        serializeData = {"user" :data.get('user_id'), "anime":data.get('anime_id')}
        if not(UserAnimeRelation.objects.filter(Q(user_id = data.get('user_id')) & Q(anime_id = data.get('anime_id')))):
            rData = UserAnimeRelationSerializer(data = serializeData)
            #print(rData)
            if rData.is_valid():
                rData.save()
                #print(UserAnimeRelation.objects.all())
            return True
    except Exception as e:
        return e