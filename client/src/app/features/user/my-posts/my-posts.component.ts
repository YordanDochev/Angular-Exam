import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Car } from 'src/app/types/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
})
export class MyPostsComponent implements OnInit {
  myCars: Car[] = [];
  myCarsSubscribed: Car[] = [];

  username: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getMyCars().subscribe({
      next: (data) => {
        this.myCars = data.cars;
        this.username = data.username;
      },
      error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
    });

    this.userService.getMyCarsSubscribes().subscribe({
      next: (data) => (this.myCarsSubscribed = data.subscribes),
      error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
    });
  }
}
