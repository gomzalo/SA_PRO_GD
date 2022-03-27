import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  constructor(private http: HttpClient) { }

  insertteam(team){
    return this.http.post<any>(environment.apiEquipo, team)
    .pipe(
      catchError(this.handleError)
    );
  }


  getOneteam(id:Number){
    
    return this.http.get<any>(environment.apiEquipo+'?id='+id);
  }

  
  getAllteamsbyteam(idequipo:Number){
    
    return this.http.get<any>(environment.apiEquipo+'?team='+idequipo);
  }

  
  getAllteams(){
    
    return this.http.get<any>(environment.apiEquipo);
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
    // Return an observable with a team-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
