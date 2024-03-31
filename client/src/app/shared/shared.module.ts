import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardCarComponent } from './card-car/card-car.component';
import { RouterModule } from '@angular/router';
import { CarFormComponent } from './car-form/car-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorDirective } from './validator/user/validator-user.directive';

@NgModule({
  declarations: [LoaderComponent, CardCarComponent, CarFormComponent, ValidatorDirective],
  imports: [CommonModule, RouterModule,FormsModule,ReactiveFormsModule],
  exports: [LoaderComponent, CardCarComponent, CarFormComponent],
})
export class SharedModule {}
