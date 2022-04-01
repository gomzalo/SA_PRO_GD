import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {
  url=environment.apiCompetencia;
  constructor(private http: HttpClient) { }
  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }

  getCompetencias(){
    return this.http.get(this.url);
  }
}
