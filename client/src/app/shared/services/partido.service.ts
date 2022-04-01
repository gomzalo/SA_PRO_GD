import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PartidoService {
  constructor(private http: HttpClient) { }

  insertMatch(match){
    return this.http.post<any>(environment.apiPartido, match)
    .pipe(
      catchError(this.handleError)
    );
  }


  updateMatch(match){
    return this.http.put<any>(environment.apiPartido, match)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteMatch(_id:string){
    return this.http.delete<any>(environment.apiPartido+'?id='+_id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getOnematch(id:Number){
    
    return this.http.get<any>(environment.apiPartido+'?id='+id);
  }

  getAllmatchs(){
    
    return this.http.get<any>(environment.apiPartido);
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
    // Return an observable with a match-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
