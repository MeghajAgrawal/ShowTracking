import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {

  readonly APIUrl = 'http://127.0.0.1:8000/'
  constructor( private http:HttpClient) { }

  getAnimeListForUser(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'anime/user/'+id)
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
  deleteAnime(data:any){
    let headers = new HttpHeaders().set('Content-Type','application/json')
    var response = this.http.request('delete',this.APIUrl+'anime',{headers:headers,body:data}).subscribe()
    return response
  }

  getEpisodebyAnimeId(id:any){
    console.log(id)
    return this.http.get(this.APIUrl+'anime/episodes?anime_id='+id)
  }

  getEpisodeWatchedList(anime_id:any,user_id:any)
  {
    return this.http.get(this.APIUrl+'anime/user/episodes',{params:{'anime_id' : anime_id , 'user_id': user_id}})
  }

  postEpisode(data:any){
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post<any>(this.APIUrl+'anime/episodes',JSON.stringify(data),{'headers':headers}).subscribe()
  }
  deleteEpisode(data:any){
    let headers = new HttpHeaders().set('Content-Type','application/json')
    var response = this.http.request('delete',this.APIUrl+'anime/episodes',{headers:headers,body:data}).subscribe()
    return response
  }
}
