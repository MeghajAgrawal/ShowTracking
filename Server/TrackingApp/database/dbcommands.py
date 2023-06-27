from django.db.models import Q

from TrackingApp.serializer import (UserSerializer,
                                    AnimeSerializer,
                                    EpisodeSerializer,
                                    UserAnimeRelationSerializer,
                                    UserAnimeEpisodeRelationSerializer)
from TrackingApp.models import (User,
                                UserAnimeRelation,
                                UserAnimeEpisodeRelation)

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
    
def addUserAnimeRelation(data):
    try:
        serializeData = {"user" :data.get('user_id'), "anime":data.get('anime_id')}
        if not(UserAnimeRelation.objects.filter(Q(user_id = data.get('user_id')) & Q(anime_id = data.get('anime_id'))).exists()):
            rData = UserAnimeRelationSerializer(data = serializeData)
            #print(rData)
            if rData.is_valid():
                rData.save()
                #print(UserAnimeRelation.objects.all())
            return True
    except Exception as e:
        return e

def deleteUserAnimeRelation(data):
    dataToBeDeleted = UserAnimeRelation.objects.filter(Q(user_id = data.get('user_id')) & Q(anime_id = data.get('anime_id')))
    if dataToBeDeleted:
        dataToBeDeleted.delete()
        return True
    else:
        return False

def getAnimeList(userID):
    # join tables Relation and anime table
    data = list(UserAnimeRelation.objects.filter(user_id = userID).select_related("anime"))
    animeList = []
    for item in data:
        aData = AnimeSerializer(item.anime)
        animeList.append(aData.data)
    return animeList
 
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

def addUserAnimeEpisodeRelation(data):
    try:
        serializeData = {"user" :data.get('user_id'), "anime":data.get('anime_id'), "episode":data.get('episode_id')}
        #print(serializeData)
        if not(UserAnimeEpisodeRelation.objects.filter(Q(user_id = data.get('user_id')) & Q(episode_id = data.get('episode_id'))).exists()):
            rData = UserAnimeEpisodeRelationSerializer(data = serializeData)
            #print(rData)
            if rData.is_valid():
                rData.save()
            return True
        return False
    except Exception as e:
        return e

def deleteUserAnimeEpisodeRelation(data):
    dataToBeDeleted = UserAnimeEpisodeRelation.objects.filter(Q(user_id = data.get('user_id')) & Q(episode_id = data.get('episode_id')))
    #print(dataToBeDeleted)
    if dataToBeDeleted:
        dataToBeDeleted.delete()
        return True
    else:
        return False

def getEpisodeWatchedList(animeID,userID):
    data = list(UserAnimeEpisodeRelation.objects.filter(Q(user_id = userID) & Q(anime_id = animeID)).select_related("episode"))
    episodeList = []
    for item in data:
        episodeData = EpisodeSerializer(item.episode)
        episodeList.append(episodeData.data['episode_id'])
    return episodeList

