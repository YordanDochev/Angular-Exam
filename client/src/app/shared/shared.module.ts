import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardCarComponent } from './card-car/card-car.component';
import { RouterModule } from '@angular/router';
import { CarFormComponent } from './car-form/car-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorDirective } from './validator/user/validator-user.directive';
import { ElapsedTimesPipe } from './pipes/elapsed-times.pipe';
import { FormatNumbersPipe } from './pipes/format-numbers.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    CardCarComponent,
    CarFormComponent,
    ValidatorDirective,
    ElapsedTimesPipe,
    FormatNumbersPipe,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    LoaderComponent,
    CardCarComponent,
    CarFormComponent,
    ElapsedTimesPipe,
    FormatNumbersPipe,
  ],
})
export class SharedModule {}
