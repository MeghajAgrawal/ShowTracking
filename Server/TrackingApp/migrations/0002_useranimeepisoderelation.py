# Generated by Django 4.1 on 2023-05-29 22:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('TrackingApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAnimeEpisodeRelation',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('episode_watched', models.BooleanField(default=True)),
                ('anime', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='TrackingApp.anime')),
                ('episode', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='TrackingApp.episode')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='TrackingApp.user')),
            ],
        ),
    ]