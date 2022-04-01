import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient,private router: Router) { }

  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }
  
  requestOptions:any = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };

  insertNotice(Notice){
    return this.http.post<any>(environment.apiNoticia, Notice,{headers: new HttpHeaders(this.headerDict)})
    .pipe(
      catchError(this.handleError)
    );
  }


  getOneNotice(id:Number){
    
    return this.http.get<any>(environment.apiNoticia+'?id='+id,{headers: new HttpHeaders(this.headerDict)});
  }

  
  getAllNoticesbyTeam(idequipo:Number){
    
    return this.http.get<any>(environment.apiNoticia+'?team='+idequipo,{headers: new HttpHeaders(this.headerDict)});
  }

  
  getAllNotices(){
    
    return this.http.get<any>(environment.apiNoticia,{headers: new HttpHeaders(this.headerDict)});
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a Notice-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
