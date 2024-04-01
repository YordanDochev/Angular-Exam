import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from 'src/app/types/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-lates-entries',
  templateUrl: './lates-entries.component.html',
  styleUrls: ['./lates-entries.component.css'],
})
export class CarsLatesEntriesComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService,private router:Router) {}

  ngOnInit(): void {
    this.carService.getLatesCars().subscribe({
      next: (data) => (this.cars = data),
      error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
    });
  }
}
