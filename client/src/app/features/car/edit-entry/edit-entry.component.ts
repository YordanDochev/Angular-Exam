import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, CarEditValue } from 'src/app/types/car';

@Component({
  selector: 'app-edit-entry-page',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
})
export class EditEntryPageComponent implements OnInit {
  // car: Car | undefined;

  // carValues: CarEditValue = {
  //   postName: '',
  //   carBrand: '',
  //   type: '',
  //   image1: '',
  //   image2: '',
  //   image3: '',
  //   image4: '',
  //   engineSize: 0,
  //   power: 0,
  //   gearbox: '',
  //   year: 2000,
  //   fuel: '',
  //   mileage: 0,
  //   description: '',
  //   color: '',
  //   price: '',
  // };
  form!: FormGroup;
  car: Car | undefined;
  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('invoked');

    this.form = this.fb.group({
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

    this.activeRoute.params.subscribe((data) => {
      const id = data['carId'];
      console.log(id);

      this.carService.getCar(id).subscribe((data) => {
        this.car = data;
        
        this.form.setValue({
          postName: data.postName,
          carBrand: data.carBrand,
          type: data.type,
          image1: data.images.image1,
          image2: data.images.image2,
          image3: data.images.image3,
          image4: data.images.image4,
          engineSize: data.engineSize,
          power: data.power,
          gearbox: data.gearbox,
          year: data.year,
          fuel: data.fuel,
          mileage: data.mileage,
          description: data.description,
          color: data.color,
          price: data.price,
        });

        this.form.setValue({
          postName: data.postName,
          carBrand: data.carBrand,
          type: data.type,
          image1: data.images.image1,
          image2: data.images.image2,
          image3: data.images.image3,
          image4: data.images.image4,
          engineSize: data.engineSize,
          power: data.power,
          gearbox: data.gearbox,
          year: data.year,
          fuel: data.fuel,
          mileage: data.mileage,
          description: data.description,
          color: data.color,
          price: data.price,
        });
      });
    });
  }
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
