import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details/details.component';
import { AddEntryPageComponent } from './add-entry/add-entry.component';
import { CatalogPageComponent } from './catalog/catalog.component';
import { EditEntryPageComponent } from './edit-entry/edit-entry.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'add-entry', component: AddEntryPageComponent },
  { path: 'details/:carId', component: DetailsPageComponent },
  { path: 'edit-entry/:carId', component: EditEntryPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
