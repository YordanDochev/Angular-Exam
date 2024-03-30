import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details/details.component';
import { CatalogPageComponent } from './catalog/catalog.component';
import { CarFormComponent } from 'src/app/shared/car-form/car-form.component';
import { AuthActivate } from 'src/app/guards/auth.activate';

const routes: Routes = [
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'add-entry', component: CarFormComponent, canActivate: [AuthActivate] },
  { path: 'details/:carId', component: DetailsPageComponent },
  { path: 'edit-entry/:carId', component: CarFormComponent, canActivate: [AuthActivate] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
