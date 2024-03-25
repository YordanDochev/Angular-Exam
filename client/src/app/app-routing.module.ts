import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AddEntryPageComponent } from './add-entry-page/add-entry-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'cars', component: CatalogPageComponent },
  {path:'contact-us', component:ContactUsPageComponent},
  {path:'add-entry', component:AddEntryPageComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
