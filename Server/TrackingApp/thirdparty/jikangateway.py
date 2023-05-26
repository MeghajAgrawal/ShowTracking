import requests
from TrackingApp.models import Anime
API_URL = 'https://api.jikan.moe/v4'

def getAnimesByName(name):
    #print("HERE :", API_URL+'/anime?q={}'.format(name))
    response = requests.get(API_URL+'/anime?q={}'.format(name))
    jsonData = response.json()
    data = []
    for values in  jsonData.get('data'):
        data.append(createAnimeModel(values))
    return data

def getAnimeByID(id):
    #print("HERE :", API_URL+'/anime/{}'.format(id))
    response = requests.get(API_URL+'/anime/{}'.format(id))
    jsonData = response.json()
    animeModel = createAnimeModel(jsonData.get('data'))
    return animeModel

def getEpisodes(id):
    #Episode Info
    print("episode id ", id)
    response = requests.get(API_URL+'/anime/{}/episodes'.format(id))
    jsonData = response.json()
    #print(jsonData)
    data = []
    for values in jsonData.get('data'):
        data.append(createEpisodeModel(values,id))
    return data

def createAnimeModel(jsonData):
    animeData = {}
    animeData['anime_id'] = jsonData.get('mal_id')
    animeData['name']= jsonData.get('title')
    animeData['image']= jsonData.get('images').get('jpg').get('image_url')
    animeData['episodes'] = jsonData.get('episodes')
    animeData['description'] = jsonData.get('synopsis')
    animeData['genres'] = '{}'.format([value.get('name') for value in jsonData.get('genres')])
    #print(animeData)
    return animeData

def createEpisodeModel(jsonData,id):
    episodeData = {}
    episodeData['anime']  = id
    episodeData['episode_no'] = jsonData.get('mal_id')
    episodeData['name'] = jsonData.get('title')
    episodeData['filler'] = jsonData.get('filler')

    return episodeData
