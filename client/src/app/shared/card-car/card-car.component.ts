import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/app/features/car/car.service';
import { UserService } from 'src/app/features/user/user.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css'],
})
export class CardCarComponent implements OnInit {
  @Input('car') car = {} as Car;
  @Input('isOwner') isOwner: boolean = false;
  isSubscribed: boolean = false;
  isLogged: boolean = true;
  constructor(
    private carService: CarService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('UserId');
    this.isSubscribed = this.car.subscribers.some((x) => x === userId)
      ? true
      : false;

    this.userService.user$.subscribe((data) => {
      if (data === undefined) {
        this.isLogged = false;
      } else {
        this.isLogged = true;
      }
    });
    if (this.isOwner) {
      return;
    } else {
      if (this.car.userId._id === userId) {
        this.isOwner = true;
      } else {
        this.isOwner = false;
      }
    }
  }

  onClickSubscribeHandler(id: string) {
    if (this.isSubscribed) {
      this.carService.unSubscribeEntry(id).subscribe(() => {
        this.isSubscribed = false;
      });
    } else {
      this.carService.subscribeEntry(id).subscribe(() => {
        this.isSubscribed = true;
      });
    }
  }
}
