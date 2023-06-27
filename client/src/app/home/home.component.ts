import { Component,OnInit,OnChanges } from '@angular/core';

import { AnimeApiService } from '../services/anime-api.service';
import { Anime } from '../anime/animemodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  animeList:any = [];
  userAnimeList:any = [];
  animeName:any = '';
  animeDisplayOpen: any = false;
  anime :  Anime | undefined
  isAnimeAdded: any

  constructor(private service:AnimeApiService){}
  
  ngOnInit():void
  {
    this.refreshAnimeList();
    this.refreshUserAnimeList();
  }

  refreshAnimeList(){
    this.service.getAnimebyName(this.animeName).subscribe(data=>{
      this.animeList = data;
    })
  }

  refreshUserAnimeList(){
    this.service.getAnimeListForUser().subscribe(data=>{
      data.forEach(element => {
        this.userAnimeList.push(element['anime_id'])
      });
    })
  }
  
  receiveAnimeDisplay($event) : any
  {
    this.animeDisplayOpen = true
    this.anime = $event["anime"]
    this.isAnimeAdded = $event["isAdded"]
  }
  receiveReturn($event):any
  {
    this.animeDisplayOpen = false
  }
  
  onSearchButtonClick(){
    this.refreshAnimeList()
  }

  
}
