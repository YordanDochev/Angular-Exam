import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserService } from 'src/app/features/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isUserAuthenticating: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private userService: UserService
  ) {
    this.router.events.subscribe(() => {
      if (
        this.location.path() === '/register' ||
        this.location.path() === '/login'
      ) {
        this.isUserAuthenticating = false;
      } else {
        this.isUserAuthenticating = true;
      }
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
}
