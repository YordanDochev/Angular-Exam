import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../features/user/user.service';
import { AuthUser } from '../types/user';

@Injectable({ providedIn: 'root' })
export class UserActivate implements CanActivate {
  constructor(private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    if (!!localStorage.getItem('UserId')) {
      return this.router.createUrlTree(['/404']);
    } else {
      return true;
    }
  }
}
