import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeacticateGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean{
      if(this.authService.isAuthenticated()){
        this.router.navigateByUrl('/dashboard')
        return false;
      } else {
        return true;
      }
  }
}
