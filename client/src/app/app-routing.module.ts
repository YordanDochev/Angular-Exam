import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'contact-us', component: ContactUsPageComponent},
  { path: 'error/:errorMsg', component: ErrorComponent },
  { path: '**', redirectTo:'/404'},
  { path: '404', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
