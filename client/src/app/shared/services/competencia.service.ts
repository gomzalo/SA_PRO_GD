import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {
  url=environment.apiCompetencia;
  constructor(private http: HttpClient,private router: Router) { }
  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }

  getCompetencias(){
    return this.http.get(this.url);
  }

  createCompetencia(data:any){
    return this.http.post(this.url,data,{headers: new HttpHeaders(this.headerDict)})
    .pipe(
      catchError(this.handleError)
    );
  }

  updateCompetencia(data:any){
    return this.http.put(this.url,data,{headers: new HttpHeaders(this.headerDict)})
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteCompetencia(data:any){
    return this.http.delete(this.url,data)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if(error.status==401){
        this.router.navigate(['unauthorized'],);
      }
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a team-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
