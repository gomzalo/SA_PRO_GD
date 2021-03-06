import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../../environments/environment"
import jwt_decode from 'jwt-decode';
// Libs
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.apiAuth;
  constructor(
    private cookieService: CookieService,
    private http:HttpClient
  ) {
    
   }

  isLoggedIn() {
    //return this.afAuth.authState;
  }

  login(data: any) {
    return this.http.post(this.url, data);
  }

  envioPass(data: any) {
    return this.http.post(this.url+`temporal-password`, data);
  }

  resetPass(data: any) {
    return this.http.post(this.url+`reset-password`, data);
  }

  getSesion():any{
    let user_string = JSON.parse(localStorage.getItem('currentUser'));
    let token=user_string.token;
    try {
      let decoded:any=jwt_decode(token);
      
      return decoded
    } catch(Error) {
      return null;
    }
   
  }

  getValidar(id:any){
    return this.http.get(this.url+`?id=${id.id}`);
  }




  logout() {
   localStorage.removeItem("currentUser");
  }

  forgotPassword(email: string) {
    //return this.afAuth.sendPasswordResetEmail(email);
  }

  resetPassword(password: string){
    // const user = this.afAuth.;
    // await user.
  }

  createUser(user:any){
   // return this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  resetPasswordEmail(email:string){
    //return this.afAuth.sendPasswordResetEmail(email);
  }

  getUserInfo(){
    const uid = this.cookieService.get('uid');
    const role = this.cookieService.get('roleType');
    const info = {uid, role}; 
    return info;
  }

}
