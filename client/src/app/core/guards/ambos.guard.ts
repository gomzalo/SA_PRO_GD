import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AmbosGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const infoAuth = this.authService.getSesion();
        if(infoAuth.datos.id_rol == '3' || infoAuth.datos.id_rol == '1' ){
        return true;
      }else{
        this.router.navigate(['']);
        return false;
      }
  }
}
