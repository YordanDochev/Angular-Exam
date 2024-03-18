import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './catalog-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CatalogPageComponent],
  imports: [CommonModule,SharedModule],
  exports:[CatalogPageComponent]
})
export class CatalogPageModule {}
