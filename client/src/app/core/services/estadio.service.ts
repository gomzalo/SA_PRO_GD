import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment"
import jwt_decode from 'jwt-decode';
// Libs
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstadioService {
  
  url=environment.apiEstadio;
  token:any;
  httpOptions:any;
  constructor(
    private cookieService: CookieService,
    private http:HttpClient,
    private authService: AuthService
  ) {
    let user_string = JSON.parse(localStorage.getItem('currentUser'));
    this.token='Bearer '+user_string.token;
    this.httpOptions= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
   }
   
   getEstadios(){
    //return this.http.get(this.url+`?id=${id.id}`);
    return this.http.get<any>(this.url);
  }

  createEstadio(data:any){
    return this.http.post(this.url,data,this.httpOptions  );
  }

  updateEstadio(data:any){
    return this.http.put(this.url,data,this.httpOptions  );
  }
}
