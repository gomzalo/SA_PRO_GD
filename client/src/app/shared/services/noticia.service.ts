import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  insertNotice(Notice){
    return this.http.post<any>(environment.apiNoticia, Notice)
    .pipe(
      catchError(this.handleError)
    );
  }


  getOneNotice(id:Number){
    
    return this.http.get<any>(environment.apiNoticia+'?id='+id);
  }

  
  getAllNoticesbyTeam(idequipo:Number){
    
    return this.http.get<any>(environment.apiNoticia+'?team='+idequipo);
  }

  
  getAllNotices(){
    
    return this.http.get<any>(environment.apiNoticia);
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
