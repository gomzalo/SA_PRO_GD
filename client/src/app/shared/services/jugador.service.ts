import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  constructor(private http: HttpClient) { }

  insertTeam(jugador){
    return this.http.post<any>(environment.apiJugador, jugador)
    .pipe(
      catchError(this.handleError)
    );
  }


  updateTeam(jugador){
    return this.http.put<any>(environment.apiJugador, jugador)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteTeam(_id:string){
    return this.http.delete<any>(environment.apiJugador+'?id='+_id)
    .pipe(
      catchError(this.handleError)
    );
  }



  getOnejugador(id:Number){
    
    return this.http.get<any>(environment.apiJugador+'?id='+id);
  }

  
  getAlljugadorsbyjugador(idjugador:Number){
    
    return this.http.get<any>(environment.apiJugador+'?jugador='+idjugador);
  }

  
  getAlljugadors(){
    
    return this.http.get<any>(environment.apiJugador);
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
    // Return an observable with a jugador-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
