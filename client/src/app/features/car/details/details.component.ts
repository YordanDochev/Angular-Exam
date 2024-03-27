import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/types/car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsPageComponent implements OnInit {
  car = {} as Car;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['carId'];
      this.carService.getCar(id).subscribe((data) => {
        this.car = data;
      });
    });
  }
}
