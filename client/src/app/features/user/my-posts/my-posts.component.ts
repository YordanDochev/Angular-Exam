import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
})
export class MyPostsComponent implements OnInit {
  myCars: Car[] = [];
  myCarsSubscribed: Car[] = [];
  
  username: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getMyCars().subscribe((data) => {
      console.log(data);

      this.myCars = data.cars;
      this.username = data.username;
    });

    this.userService
      .getMyCarsSubscribes()
      .subscribe((data) => this.myCarsSubscribed = data.subscribes);
  }
}
