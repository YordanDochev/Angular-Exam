import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';
import { RequestInfoComponent } from './request-info/request-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { CarModule } from '../features/car/car.module';

@NgModule({
  declarations: [BannerComponent, HomePageComponent, RequestInfoComponent, AboutUsComponent],
  imports: [CommonModule,SharedModule,RouterModule,CarModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
