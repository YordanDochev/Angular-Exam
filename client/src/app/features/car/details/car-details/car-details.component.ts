import { Component, Input } from '@angular/core';
import { Car } from 'src/app/types/car';
import { CarService } from '../../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent {
  @Input('car') car = {} as Car;
  @Input('isOwner') isOwner: boolean = false;

  constructor(private carService: CarService, private router: Router) {}

  onClickDeleteHanlder(id: string) {
    this.carService.deleteEntry(id).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }
}
