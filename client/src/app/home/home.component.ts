import { Component,OnInit } from '@angular/core';

import { AnimeApiService } from '../services/anime-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
