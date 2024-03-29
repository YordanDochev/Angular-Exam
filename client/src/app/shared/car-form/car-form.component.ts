import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarService } from '../../features/car/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent implements OnInit {
  isEditMode: boolean = false;

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
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['carId'];
      if (id !== undefined) {
        this.isEditMode = true;
        this.carService.getCar(id).subscribe((car) => {
          this.form.patchValue({
            postName: car.postName,
            carBrand: car.carBrand,
            type: car.type,
            images: {
              image1: car.images.image1,
              image2: car.images.image2,
              image3: car.images.image3,
              image4: car.images.image4,
            },
            engineSize: car.engineSize,
            power: car.power,
            year: car.year,
            gearbox: car.gearbox,
            fuel: car.fuel,
            mileage: car.mileage,
            description: car.description,
            color: car.color,
            price: car.price,
          });
          // this.car = data;
        });
      }
    });
  }
  submitFromHandler(): void {
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
    if(this.isEditMode === false){

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
    }else{
      
    }

  }
}
