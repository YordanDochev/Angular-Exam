import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardCarComponent } from './card-car/card-car.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoaderComponent, CardCarComponent, ],
  imports: [CommonModule,RouterModule],
  exports: [LoaderComponent,CardCarComponent,],
})
export class SharedModule {}
