import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  readonly APIUrl = 'http://127.0.0.1:8000/'
  readonly headers = new HttpHeaders().set('Content-Type','application/json')
  constructor( private http:HttpClient) { }

  loginUser(data:any){
    return this.http.post<any>(this.APIUrl+'login',JSON.stringify(data),{'headers':this.headers})
  }
  getUser(userID:any){
    return this.http.get<any[]>(this.APIUrl+'user?user_id='+userID)
  }
  addUser(data:any){
    return this.http.post<any>(this.APIUrl+'user',JSON.stringify(data),{'headers':this.headers})
  }
  updateUser(data:any){
    return this.http.put<any>(this.APIUrl+'user',JSON.stringify(data),{'headers':this.headers})
  }
}
