import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PrediccionService {

  constructor(private http: HttpClient) { }
  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }
  predict(local,visitante){
   const data={id_home:local,
      id_away:visitante
    }
    return this.http.post<any>(environment.apiPredicción, data, {headers: new HttpHeaders(this.headerDict)})
  }

}
