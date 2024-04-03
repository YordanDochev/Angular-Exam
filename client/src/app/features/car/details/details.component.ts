import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/types/car';
import { CarService } from '../car.service';
import { UserService } from '../../user/user.service';
import { AuthUser } from 'src/app/types/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsPageComponent implements OnInit {
  car = {} as Car;
  public isOwner: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['carId'];
      this.carService.getCar(id).subscribe({
        next: (data) => (this.car = data),
        error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
      });
      if (!!localStorage.getItem('UserId')) {
        this.userService.getProfile().subscribe({
          next: (data) => (this.isOwner = !!data?.cars.find((x) => x === id)),
          error: (error) =>
            this.router.navigate([`/error/:${error.statusText}`]),
        });
      }
    });
  }
}
