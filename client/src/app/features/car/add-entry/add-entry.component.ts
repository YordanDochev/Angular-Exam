import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entry-page',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css'],
})
export class AddEntryPageComponent{
  form = this.fb.group({
    postName: [''],
    carBrand: [''],
    type: [''],
    images: this.fb.group({
      image1: [''],
      image2: [''],
      image3: [''],
      image4: [''],
    }),
    engineSize: [0],
    power: [0],
    year: [2000],
    gearbox: [''],
    fuel: [''],
    mileage: [0],
    description: [''],
    color: [''],
    price: [''],
  });
  
  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router
  ) {}

  addEntryFromHandler(): void {
    const {
      postName,
      carBrand,
      type,
      images,
      engineSize,
      power,
      year,
      gearbox,
      fuel,
      mileage,
      description,
      color,
      price,
    } = this.form.value;

    this.carService
      .createEntry(
        postName!,
        carBrand!,
        type!,
        images!,
        engineSize!,
        power!,
        year!,
        gearbox!,
        fuel!,
        mileage!,
        description!,
        color!,
        price!
      )
      .subscribe(() => {
        this.router.navigate(['/catalog']);
        this.form.reset();
      });
  }
}
