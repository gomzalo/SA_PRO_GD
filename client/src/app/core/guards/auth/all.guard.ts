import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const infoAuth = this.authService.getSesion();
        if(infoAuth==null){
        return true;
      }else{
        this.router.navigate(['/home']);
        return false;
      }
  }
  
}
