import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {

  readonly APIUrl = 'http://127.0.0.1:8000/'
  constructor( private http:HttpClient) { }

  getAnimeListForUser():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'anime/user/1')
  }
  getAnimebyName(val:any){
    return this.http.get<any[]>(this.APIUrl+'anime?name='+val)
  }
  getAnimebyId(id:any){
    return this.http.get(this.APIUrl+'anime/'+ id)
  }
  postAnime(data:any){
    let headers = new HttpHeaders().set('Content-Type','application/json')
    var response = this.http.post<any>(this.APIUrl+'anime', JSON.stringify(data),{'headers':headers}).subscribe()
    return response
  }

  getEpisodebyAnimeId(id:any){
    console.log(id)
    return this.http.get(this.APIUrl+'anime/episodes/'+id)
  }
}
