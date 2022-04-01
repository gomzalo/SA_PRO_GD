import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  constructor(private http: HttpClient) { }
  headerDict = {
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,
  }
  insertTecnico(Tecnico){
    return this.http.post<any>(environment.apiTecnico, Tecnico,{headers: new HttpHeaders(this.headerDict)})
    
  }


  updateTecnico(Tecnico){
    return this.http.put<any>(environment.apiTecnico, Tecnico,{headers: new HttpHeaders(this.headerDict)})
    
  }

  deleteTecnico(_id:string){
    return this.http.delete<any>(environment.apiTecnico+'?id='+_id,{headers: new HttpHeaders(this.headerDict)})
    
  }



  getOneTecnico(id:Number){
    
    return this.http.get<any>(environment.apiTecnico+'?id='+id);
  }

  
  getAllTecnicosbyTecnico(idTecnico:Number){
    
    return this.http.get<any>(environment.apiTecnico+'?Tecnico='+idTecnico);
  }

  
  getAllTecnicos(){
    
    return this.http.get<any>(environment.apiTecnico);
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
    // Return an observable with a Tecnico-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
