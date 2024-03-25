import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComentsComponent } from './details/car-coments/car-coments.component';
import { CarDetailsComponent } from './details/car-details/car-details.component';
import { DetailsPageComponent } from './details/details.component';
import { CarRoutingModule } from './car-routing.module';
import { AddEntryPageComponent } from './add-entry/add-entry.component';
import { CatalogPageComponent } from './catalog/catalog.component';
import { CarsEntriesComponent } from './catalog/cars-entries/cars-entries.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarsLatesEntriesComponent } from './lates-entries/lates-entries.component';

@NgModule({
  declarations: [
    CarComentsComponent,
    CarDetailsComponent,
    DetailsPageComponent,
    AddEntryPageComponent,
    CatalogPageComponent,
    CarsEntriesComponent,
    CarsLatesEntriesComponent,
  ],
  imports: [CommonModule, CarRoutingModule, SharedModule],
  exports: [CarsLatesEntriesComponent],
})
export class CarModule {}
