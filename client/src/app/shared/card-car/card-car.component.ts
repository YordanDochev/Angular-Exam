import { Component, Input } from '@angular/core';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent {
@Input('car') car = {} as Car
}
