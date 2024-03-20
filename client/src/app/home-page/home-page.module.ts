import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BannerComponent, HomePageComponent],
  imports: [CommonModule,SharedModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
