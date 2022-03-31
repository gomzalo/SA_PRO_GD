import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(
    private http:HttpClient
  ) { }
  reporte1() { }
  reporte2() { }
  reporte3() { }
  reporte4() { }
  reporte5() { }

  reporte6(genero:string) {
    return this.http.get<any>(environment.apiAdministrador+'report/6?gender='+genero);
   }

  reporte7(age:Number) {
    return this.http.get<any>(environment.apiAdministrador+'report/7?age='+age);
   }

  reporte8(order:Number) {
    return this.http.get<any>(environment.apiAdministrador+'report/8?order='+order);
   }
  reporte9(order:Number,id_team:Number) { 
    return this.http.get<any>(environment.apiAdministrador+'report/9?order='+order+'&id_team='+id_team);
  }
  reporte10() {
    return this.http.get<any>(environment.apiAdministrador+'report/10');
  }
   

}
