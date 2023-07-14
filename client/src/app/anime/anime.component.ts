import { Component } from '@angular/core';

import { AnimeApiService } from '../services/anime-api.service';
import { Anime } from './animemodel';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {

  animeList:any = [];
  animeIdList:any = []
  isAnimeAdded:any = false
  animeDisplayOpen: any = false;
  anime :  Anime | undefined
  
  constructor(private service:AnimeApiService){}
  ngOnInit():void
  {
    this.refreshAnimeList();
  }
  
  isLoggedIn(){
    if(localStorage.getItem("userID")){
      return true
    }
    return false
  }
  isEmpty(){
    if(localStorage.getItem('userID') && this.animeList.length > 0){
      return true
    }
    return false
  }

  refreshAnimeList(){
    this.service.getAnimeListForUser(localStorage.getItem('userID')).subscribe(data=>{
      data.forEach(element => {
        this.animeList.push(element)
        this.animeIdList.push(element['anime_id'])
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
}
