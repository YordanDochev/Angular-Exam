import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from 'src/app/types/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogPageComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.carService
      .getAllCars()
      .subscribe({
        next: (data) => (this.cars = data),
        error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
      });
  }
}
