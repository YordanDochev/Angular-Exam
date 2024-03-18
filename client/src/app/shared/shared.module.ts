import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardCarComponent } from './card-car/card-car.component';

@NgModule({
  declarations: [LoaderComponent, CardCarComponent],
  imports: [CommonModule],
  exports: [LoaderComponent,CardCarComponent],
})
export class SharedModule {}
