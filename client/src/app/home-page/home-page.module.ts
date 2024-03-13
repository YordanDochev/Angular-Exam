import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [BannerComponent, HomePageComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
