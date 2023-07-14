import { Component , Input ,Output, EventEmitter} from '@angular/core';
import { Anime } from '../animemodel';
import { AnimeApiService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-animecards',
  templateUrl: './animecards.component.html',
  styleUrls: ['./animecards.component.css']
})
export class AnimecardsComponent {
  @Input() anime :  Anime | undefined
  @Input() userAnimeList: any
  @Output() animeEventEmitter = new EventEmitter<{}>();
  constructor(private service:AnimeApiService){}

  onClickAnime(){
    console.log("Card Clicked")
    var animeData = {"anime":this.anime,"isAdded":this.checkIfAnimeAdded(this.anime?.anime_id)}
    this.animeEventEmitter.emit(animeData)
  }
  onAddButtonClick(){
    var body = {"anime_id":this.anime?.anime_id , "user_id":localStorage.getItem('userID')}
    this.service.postAnime(body)
  }

  checkIfAnimeAdded(id:any){
    //console.log(this.userAnimeList)
    for(var val of this.userAnimeList){
      if (id == val){
        return true;
      }
    }
    return false;
  }
}
