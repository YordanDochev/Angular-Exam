import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details/details.component';
import { AddEntryPageComponent } from './add-entry/add-entry.component';
import { CatalogPageComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: 'details/:carId', component: DetailsPageComponent },
  { path: 'add-entry', component: AddEntryPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
