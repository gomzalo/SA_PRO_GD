import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }
  insertUser(user){
    return this.http.post<any>(environment.apiAdministrador+'user', user)
  }

  membresiaBuy(user){
    return this.http.post<any>(environment.apiCliente+'membership', user,{headers: new HttpHeaders(this.headerDict)})
    .pipe(
      catchError(this.handleError)
    );
  }

  membresiaCancel(user){
    return this.http.put<any>(environment.apiCliente+'membership', user,{headers: new HttpHeaders(this.headerDict)})
    .pipe(
      catchError(this.handleError)
    );
  }


  getAllUsers(){
    
    return this.http.get<any>(environment.apiCliente,{headers: new HttpHeaders(this.headerDict)});
  }


  getUser(id:Number){
    
    return this.http.get<any>(environment.apiCliente+'?id='+id,{headers: new HttpHeaders(this.headerDict)});
  }


  updateUser(user){
    return this.http.put<any>(environment.apiAdministrador+'user', user,{headers: new HttpHeaders(this.headerDict)})
    
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
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}


