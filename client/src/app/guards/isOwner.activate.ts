import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../features/user/user.service';
import { CarService } from '../features/car/car.service';

@Injectable({ providedIn: 'root' })
export class OwnerActivate implements CanActivate {
  constructor(private carService: CarService, private router: Router,private activeRoute:ActivatedRoute) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
        this.activeRoute.params.subscribe((data)=>{
            const id = data['carId']
        })

    if (this.userService.isLogged) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}
