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
  constructor(private service:AnimeApiService){}
  animeDisplayOpen: any = false;
  anime :  Anime | undefined

  ngOnInit():void
  {
    this.refreshAnimeList();
  }

  refreshAnimeList(){
    this.service.getAnimeList().subscribe(data=>{
      this.animeList = data;
    })
  }
  receiveAnimeDisplay($event) : any
  {
    this.animeDisplayOpen = true
    this.anime = $event
  }
  receiveReturn($event):any
  {
    this.animeDisplayOpen = false
  }
}
