from rest_framework import serializers
from TrackingApp.models import Anime,User,UserAnimeRelation,Episode,UserAnimeEpisodeRelation

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id',
                  'name',
                  'username',
                  'email',
                  'password',
                  'dob')
        
class AnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anime
        fields = ('anime_id',
                  'name',
                  'image',
                  'episodes',
                  'description',
                  'genres')
        
class UserAnimeRelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAnimeRelation
        fields = ('id',
                  'user',
                  'anime')
                
class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = ('anime',
                  'episode_id',
                  'episode_no',
                  'name',
                  'description',
                  'filler')

class UserAnimeEpisodeRelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAnimeEpisodeRelation
        fields = ('id',
                  'user',
                  'anime',
                  'episode',
                  'episode_watched')

