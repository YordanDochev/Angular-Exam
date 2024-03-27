import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-cars-lates-entries',
  templateUrl: './lates-entries.component.html',
  styleUrls: ['./lates-entries.component.css'],
})
export class CarsLatesEntriesComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getLatesCars().subscribe((data) => (this.cars = data));
  }
}
