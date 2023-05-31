import { Component } from '@angular/core';

import { AnimeApiService } from '../services/anime-api.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {

  animeList:any = [];
  constructor(private service:AnimeApiService){}
  ngOnInit():void
  {
    this.refreshAnimeList();
  }
  refreshAnimeList(){
    this.service.getAnimeList().subscribe(data=>{
      this.animeList = data;
    })
  }
}
