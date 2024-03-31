import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../../features/car/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { urlAddressValidator } from '../utils/url-address-validator';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent implements OnInit {
  isEditMode: boolean = false;
  private id: string | undefined;
  form = this.fb.group({
    postName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(100)]],
    carBrand: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    type: ['',Validators.required],
    images: this.fb.group({
      image1: ['',[Validators.required,urlAddressValidator()]],
      image2: ['',[Validators.required,urlAddressValidator()]],
      image3: ['',[Validators.required,urlAddressValidator()]],
      image4: ['',[Validators.required,urlAddressValidator()]],
    }),
    engineSize: [1000,[Validators.required,Validators.max(6000),Validators.min(1000)]],
    power: [0,[Validators.required,Validators.max(1000)]],
    year: [1900,[Validators.required,Validators.max(2024),Validators.min(1900)]],
    gearbox: ['',Validators.required],
    fuel: ['',Validators.required],
    mileage: [0,[Validators.required,Validators.max(100000000)]],
    description: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(2000)]],
    color: ['',[Validators.required,Validators.minLength(2)]],
    price: ['',[Validators.required,Validators.min(1000),Validators.max(100000000)]],
  });

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      this.id = data['carId'];
      console.log( typeof this.id);

      if (this.id !== undefined) {
        this.isEditMode = true;
        this.carService.getCar(this.id).subscribe((car) => {
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
    if (this.isEditMode === false) {
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
        });
    } else {
      this.carService
        .editEntry(
          this.id!,
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
          this.router.navigate([`/details/${this.id}`]);
        });
    }
    this.form.reset();
  }
}
