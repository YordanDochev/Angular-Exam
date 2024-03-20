import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './catalog-page.component';
import { SharedModule } from '../shared/shared.module';
import { CarsEntriesComponent } from './cars-entries/cars-entries.component';

@NgModule({
  declarations: [CatalogPageComponent, CarsEntriesComponent],
  imports: [CommonModule,SharedModule],
  exports:[CatalogPageComponent]
})
export class CatalogPageModule {}
