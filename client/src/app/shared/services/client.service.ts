import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient,
    private router: Router) { }
  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }
  insertCliente(cliente){
    return this.http.post<any>(environment.apiCliente, cliente,{headers: new HttpHeaders(this.headerDict)})
    
  }


  updateCliente(cliente){
    return this.http.put<any>(environment.apiCliente, cliente,{headers: new HttpHeaders(this.headerDict)})
    
  }

  deleteCliente(_id:string){
    return this.http.delete<any>(environment.apiCliente+'?id='+_id,{headers: new HttpHeaders(this.headerDict)})
    
  }



  getOnecliente(id:Number){
    
    return this.http.get<any>(environment.apiCliente+'?id='+id,{headers: new HttpHeaders(this.headerDict)});
  }

  
  getFavoritosCliente(idcliente:Number){
    
    return this.http.get<any>(environment.apiCliente+'follow?id_client='+idcliente,{headers: new HttpHeaders(this.headerDict)});
  }

  
  getAllclientes(){
    
    return this.http.get<any>(environment.apiCliente,{headers: new HttpHeaders(this.headerDict)});
  }


  reporte1( idequipo){
    return this.http.get<any>(environment.apiCliente+'report/1',{headers: new HttpHeaders(this.headerDict)});
  }

  reporte2(anios,tipo){
    return this.http.get<any>(environment.apiCliente+'report/2?age='+anios+'&player='+tipo,{headers: new HttpHeaders(this.headerDict)});
  }

  reporte3(anios,tipo){
    return this.http.get<any>(environment.apiCliente+'report/3?age='+anios+'&player='+tipo,{headers: new HttpHeaders(this.headerDict)});
  }

  reporte4(competicion){
    return this.http.get<any>(environment.apiCliente+'report/4',{headers: new HttpHeaders(this.headerDict)});
  }


  reporte5(pais){
    return this.http.get<any>(environment.apiCliente+'report/5',{headers: new HttpHeaders(this.headerDict)});
  }

  reporte6(anios){
    return this.http.get<any>(environment.apiCliente+'report/6?age='+anios,{headers: new HttpHeaders(this.headerDict)});
  }

  reporte7(pais){
    return this.http.get<any>(environment.apiCliente+'report/7',{headers: new HttpHeaders(this.headerDict)});
  }

  reporte8(capacidad){
    return this.http.get<any>(environment.apiCliente+'report/8?capacity='+capacidad,{headers: new HttpHeaders(this.headerDict)});
  }


  reporte9(equipo){
    return this.http.get<any>(environment.apiCliente+'report/9',{headers: new HttpHeaders(this.headerDict)});
  }

  reporte10(id,tipo){
    return this.http.get<any>(environment.apiCliente+'report/10',{headers: new HttpHeaders(this.headerDict)});
  }


  reporte11(goles){
    return this.http.get<any>(environment.apiCliente+'report/11?goals='+goles,{headers: new HttpHeaders(this.headerDict)});
  }


  reporte12(incidencia,competicion){
    return this.http.get<any>(environment.apiCliente+'report/12',{headers: new HttpHeaders(this.headerDict)});
  }

  reporte13(incidencia,competicion,anio){
    return this.http.get<any>(environment.apiCliente+'report/13',{headers: new HttpHeaders(this.headerDict)});
  }

  reporte14(competicion,equipo){
    return this.http.get<any>(environment.apiCliente+'report/14',{headers: new HttpHeaders(this.headerDict)});
  }

  reporte15(anio){
    return this.http.get<any>(environment.apiCliente+'report/15',{headers: new HttpHeaders(this.headerDict)});
  }


  reporte16(equipo1,equipo2){
    return this.http.get<any>(environment.apiCliente+'report/16',{headers: new HttpHeaders(this.headerDict)});
  }


  reporte17(equipo){
    return this.http.get<any>(environment.apiCliente+'report/17',{headers: new HttpHeaders(this.headerDict)});
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
