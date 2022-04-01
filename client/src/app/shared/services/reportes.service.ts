import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(
    private http:HttpClient,
    private router: Router
  ) { }

  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }
  reporte1() { }
  reporte2() { }
  reporte3() { }
  reporte4() { }
  reporte5() { }

  reporte6(genero:string) {
    return this.http.get<any>(environment.apiAdministrador+'report/6?gender='+genero,{headers: new HttpHeaders(this.headerDict)})
   }

  reporte7(age:Number) {
    return this.http.get<any>(environment.apiAdministrador+'report/7?age='+age,{headers: new HttpHeaders(this.headerDict)});
   }

  reporte8(order:Number) {
    return this.http.get<any>(environment.apiAdministrador+'report/8?order='+order,{headers: new HttpHeaders(this.headerDict)});
   }
  reporte9(order:Number,id_team:Number) { 
    return this.http.get<any>(environment.apiAdministrador+'report/9?order='+order+'&id_team='+id_team,{headers: new HttpHeaders(this.headerDict)});
  }
  reporte10() {
    return this.http.get<any>(environment.apiAdministrador+'report/10',{headers: new HttpHeaders(this.headerDict)});
  }
   
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      if(error.status==401){
        this.router.navigate(['unauthorized']);
      }
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a cliente-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
