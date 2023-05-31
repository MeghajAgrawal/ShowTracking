import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {

  readonly APIUrl = 'http://127.0.0.1:8000/'
  constructor( private http:HttpClient) { }

  getAnimeList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'anime/user/1')
  }
  getAnimebyName(val:any){
    return this.http.get<any[]>(this.APIUrl+'anime?name=',val)
  }
  getAnimebyId(id:any){
    return this.http.get(this.APIUrl+'anime/',id)
  }

}
