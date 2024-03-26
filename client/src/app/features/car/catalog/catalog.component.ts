import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogPageComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((data) => this.cars = data);
    
  }
}
