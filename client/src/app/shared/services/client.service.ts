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
