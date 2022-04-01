import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  constructor(private http: HttpClient,private router: Router) { }

  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }
  
  requestOptions:any = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };

  insertJugador(jugador){
    return this.http.post<any>(environment.apiJugador, jugador,this.requestOptions)
    .pipe(
      catchError(this.handleError)
    );
  }


  updateJugador(jugador){
    return this.http.put<any>(environment.apiJugador, jugador,this.requestOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteJugador(_id:string){
    return this.http.delete<any>(environment.apiJugador+'?id='+_id,this.requestOptions)
    .pipe(
      catchError(this.handleError)
    );
  }



  getOnejugador(id:Number){
    
    return this.http.get<any>(environment.apiJugador+'?id='+id,this.requestOptions);
  }

  
  getAlljugadorsbyjugador(idjugador:Number){
    
    return this.http.get<any>(environment.apiJugador+'?jugador='+idjugador,{headers: new HttpHeaders(this.headerDict)});
  }

  
  getAlljugadors(){
    
    return this.http.get<any>(environment.apiJugador,{headers: new HttpHeaders(this.headerDict)});
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
