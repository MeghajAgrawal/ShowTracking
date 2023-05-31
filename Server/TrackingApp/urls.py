from django.urls import re_path, path
from TrackingApp.views import *

urlpatterns=[
    re_path(r'^anime$',animeviews.animeAPI),
    re_path(r'^anime/display$',animeviews.displayAnimeList),
    re_path(r'^anime/([0-9]+)$',animeviews.getAnimeByID),
    re_path(r'^anime/user/([0-9]+)$',animeviews.getAnimeListByUserID),
    re_path(r'^anime/([0-9]+)/episodes$',animeviews.episodeAPI)
    
]