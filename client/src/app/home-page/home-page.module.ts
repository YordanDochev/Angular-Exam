import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';
import { RequestInfoComponent } from './request-info/request-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarsLatesEntriesComponent } from './cars-lates-entries/cars-lates-entries.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BannerComponent, HomePageComponent, RequestInfoComponent, AboutUsComponent, CarsLatesEntriesComponent],
  imports: [CommonModule,SharedModule,RouterModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
