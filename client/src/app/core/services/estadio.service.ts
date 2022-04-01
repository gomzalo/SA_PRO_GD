import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment"
import jwt_decode from 'jwt-decode';
// Libs
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EstadioService {

  url=environment.apiEstadio;
  constructor(
    private cookieService: CookieService,
    private http:HttpClient
  ) {
    
   }

   getEstadios(){
    //return this.http.get(this.url+`?id=${id.id}`);
    return this.http.get(this.url);
  }
}
