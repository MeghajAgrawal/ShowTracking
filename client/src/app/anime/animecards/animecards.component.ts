import { Component , Input ,Output, EventEmitter} from '@angular/core';
import { Anime } from '../animemodel';
import { AnimeComponent } from '../anime.component';

@Component({
  selector: 'app-animecards',
  templateUrl: './animecards.component.html',
  styleUrls: ['./animecards.component.css']
})
export class AnimecardsComponent {
  @Input() anime :  Anime | undefined
  @Output() animeEventEmitter = new EventEmitter<Anime>();
  animeBoolean: any = false
  constructor(){}

  onClickAnime(){
    console.log("Card Clicked")
    this.animeEventEmitter.emit(this.anime)
  }
}
