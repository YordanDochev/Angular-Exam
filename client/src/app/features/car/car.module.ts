import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailsComponent } from './details/car-details/car-details.component';
import { DetailsPageComponent } from './details/details.component';
import { CarRoutingModule } from './car-routing.module';
import { CatalogPageComponent } from './catalog/catalog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarsLatesEntriesComponent } from './lates-entries/lates-entries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [
    CarDetailsComponent,
    DetailsPageComponent,
    CatalogPageComponent,
    CarsLatesEntriesComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommentsModule
  ],
  exports: [CarsLatesEntriesComponent],
})
export class CarModule {}
