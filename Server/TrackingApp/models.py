from django.db import models

# Create your models here.
class User(models.Model):
    user_id  = models.AutoField(primary_key=True)
    name    = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    email   = models.EmailField()
    password = models.CharField(max_length=100)
    dob     = models.DateField()

class Anime(models.Model):
    anime_id = models.IntegerField(primary_key=True) 
    name = models.CharField(max_length=100)
    image = models.URLField(max_length=1000)
    episodes = models.IntegerField()
    description = models.TextField()
    genres = models.CharField(max_length= 400)

class UserAnimeRelation(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    anime = models.ForeignKey(Anime, on_delete= models.CASCADE)

class Episode(models.Model):
    anime = models.ForeignKey(Anime, on_delete= models.CASCADE)
    episode_id = models.AutoField(primary_key=True)
    episode_no = models.IntegerField()
    name = models.CharField(max_length=100)
    description = models.TextField(null=True)
    filler = models.BooleanField(default=False)

class UserAnimeEpisodeRelation(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User,on_delete= models.CASCADE)
    anime = models.ForeignKey(Anime,on_delete= models.CASCADE)
    episode = models.ForeignKey(Episode,on_delete= models.CASCADE)
    episode_watched = models.BooleanField(default=True)

# class Group(models.Model):
#     group_id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=200)
#     description = models.TextField(max_length=400)

# class UserGroupRelation(models.Model):
#     id = models.AutoField(primary_key=True)
#     group_id = models.ForeignKey(Group,on_delete=models.CASCADE)
#     user_id = models.ForeignKey(User,on_delete=models.CASCADE)