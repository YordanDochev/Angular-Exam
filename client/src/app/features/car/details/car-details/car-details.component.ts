import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent   {
  @Input('car') car = {} as Car;
}
