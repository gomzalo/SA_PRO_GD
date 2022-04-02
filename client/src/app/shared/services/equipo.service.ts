import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class EquipoService {
  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }
  

  constructor(private http: HttpClient,private router: Router) { }

  insertTeam(team){
    return this.http.post<any>(environment.apiEquipo, team,{headers: new HttpHeaders(this.headerDict)})
    .pipe(
      catchError(this.handleError)
    );
  }


  updateTeam(team){
    return this.http.put<any>(environment.apiEquipo, team,{headers: new HttpHeaders(this.headerDict)})
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteTeam(_id:string){
    return this.http.delete<any>(environment.apiEquipo+'?id='+_id,{headers: new HttpHeaders(this.headerDict)})
    .pipe(
      catchError(this.handleError)
    );
  }



  getOneteam(id:Number){
    
    return this.http.get<any>(environment.apiEquipo+'?id='+id,{headers: new HttpHeaders(this.headerDict)});
  }

  
  getAllteamsbyteam(idequipo:Number){
    
    return this.http.get<any>(environment.apiEquipo+'?team='+idequipo,{headers: new HttpHeaders(this.headerDict)});
  }

  
  getAllteams(){
    
    return this.http.get<any>(environment.apiEquipo,{headers: new HttpHeaders(this.headerDict)});
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if(error.status==401){
        this.router.navigate(['unauthorized']);
      }
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a team-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
