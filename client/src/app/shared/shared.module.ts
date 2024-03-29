import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardCarComponent } from './card-car/card-car.component';
import { RouterModule } from '@angular/router';
import { CarFormComponent } from './car-form/car-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoaderComponent, CardCarComponent, CarFormComponent],
  imports: [CommonModule, RouterModule,FormsModule,ReactiveFormsModule],
  exports: [LoaderComponent, CardCarComponent, CarFormComponent],
})
export class SharedModule {}
