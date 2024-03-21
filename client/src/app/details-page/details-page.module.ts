import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarComentsComponent } from './car-coments/car-coments.component';

@NgModule({
  declarations: [DetailsPageComponent, CarDetailsComponent, CarComentsComponent],
  imports: [CommonModule],
  exports: [DetailsPageComponent],
})
export class DetailsPageModule {}
