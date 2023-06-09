import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Anime } from '../animemodel';
import { AnimeApiService } from '../../services/anime-api.service';

@Component({
  selector: 'app-animedisplay',
  templateUrl: './animedisplay.component.html',
  styleUrls: ['./animedisplay.component.css']
})
export class AnimedisplayComponent {
  @Input() anime :  Anime | undefined
  @Output() closeEventEmitter = new EventEmitter<boolean>();

  animeBoolean: any = false
  episodeList:any = []
  constructor(private service:AnimeApiService){}
  ngOnInit():void
  {
    console.log(this.anime)
    this.getEpisodeList();
  }
  getEpisodeList(){
    if(this.anime)
    {
      this.service.getEpisodebyAnimeId(this.anime.anime_id).subscribe(data=>{
        this.episodeList = data;
      })
    }
  }
  onBackClick(){
    this.closeEventEmitter.emit(false)
  }

}
