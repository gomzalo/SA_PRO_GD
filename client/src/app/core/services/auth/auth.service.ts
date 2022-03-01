import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import {HttpClient, HttpHeaders} from '@angular/common/http';

// Libs
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:any;
  constructor(
    private afAuth: AngularFireAuth,
    private cookieService: CookieService,
    private http:HttpClient
  ) {
    this.url = "http://localhost:5000/";
   }

  isLoggedIn() {
    return this.afAuth.authState;
  }

  login(data: any) {
    return this.http.post(this.url +'esb/user/login', data);
  }

  logout() {
    return this.afAuth.signOut();
  }

  forgotPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  resetPassword(password: string){
    // const user = this.afAuth.;
    // await user.
  }

  createUser(user:any){
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  resetPasswordEmail(email:string){
    return this.afAuth.sendPasswordResetEmail(email);
  }

  getUserInfo(){
    const uid = this.cookieService.get('uid');
    const role = this.cookieService.get('roleType');
    const info = {uid, role}; 
    return info;
  }

}
