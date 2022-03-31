import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  insertCliente(cliente){
    return this.http.post<any>(environment.apiCliente, cliente)
    .pipe(
      catchError(this.handleError)
    );
  }


  updateCliente(cliente){
    return this.http.put<any>(environment.apiCliente, cliente)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteCliente(_id:string){
    return this.http.delete<any>(environment.apiCliente+'?id='+_id)
    .pipe(
      catchError(this.handleError)
    );
  }



  getOnecliente(id:Number){
    
    return this.http.get<any>(environment.apiCliente+'?id='+id);
  }

  
  getFavoritosCliente(idcliente:Number){
    
    return this.http.get<any>(environment.apiCliente+'follow?id_client='+idcliente);
  }

  
  getAllclientes(){
    
    return this.http.get<any>(environment.apiCliente);
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
    // Return an observable with a cliente-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
