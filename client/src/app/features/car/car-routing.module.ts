import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details/details.component';
import { CatalogPageComponent } from './catalog/catalog.component';
import { CarFormComponent } from 'src/app/shared/car-form/car-form.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'add-entry', component: CarFormComponent },
  { path: 'details/:carId', component: DetailsPageComponent },
  { path: 'edit-entry/:carId', component: CarFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
