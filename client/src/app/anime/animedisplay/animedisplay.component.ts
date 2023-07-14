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
  @Input() isAnimeAdded: any
  @Output() closeEventEmitter = new EventEmitter<boolean>();

  animeBoolean: any = false
  userWatchedList:any = []
  episodeList:any = []
  constructor(private service:AnimeApiService){}
  
  ngOnInit():void
  {
    console.log(this.anime)
    if(this.isAnimeAdded)
    {
      this.getEpisodeList();
      this.getEpisodeWatchedList();
    }
  }
  
  // Anime Episode List
  getEpisodeList(){
    if(this.anime)
    {
      this.service.getEpisodebyAnimeId(this.anime.anime_id).subscribe(data=>{
        this.episodeList = data;
      })
    }
  }
  getEpisodeWatchedList(){
    if(this.anime){
      this.service.getEpisodeWatchedList(this.anime.anime_id,1).subscribe(data=>{
        this.userWatchedList = data;
      })
    }
  }
  checkIfWatched(episode_id){
    for (let index = 0; index < this.userWatchedList.length; index++) {
      if(episode_id == this.userWatchedList[index])
        return true
    }
    return false;
  }

  onAddButtonClick(){
    var body = {"anime_id":this.anime?.anime_id , "user_id":localStorage.getItem('userID')}
    console.log(body)
    this.service.postAnime(body)
  }

  onRemoveButtonClick(){
    var body = {"anime_id":this.anime?.anime_id , "user_id":localStorage.getItem('userID')}
    this.service.deleteAnime(body)
  }
  //Event to False
  onBackClick(){
    this.closeEventEmitter.emit(false)
  }

  addEpisodeButton(episode_id:any){
    var body = {"anime_id":this.anime?.anime_id , "user_id":localStorage.getItem('userID') , "episode_id":episode_id}
    this.service.postEpisode(body)
  }

  deleteEpisodeButton(episode_id:any){
    var body = {"anime_id":this.anime?.anime_id , "user_id":localStorage.getItem('userID') , "episode_id":episode_id}
    this.service.deleteEpisode(body)
  }
}
