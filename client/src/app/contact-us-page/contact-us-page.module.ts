import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsPageComponent } from './contact-us-page.component';
import { HeaderComponent } from './header/header.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { MapComponent } from './map/map.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [ContactUsPageComponent, HeaderComponent, ContactInfoComponent, MapComponent, TeamComponent],
  imports: [CommonModule],
  exports: [ContactUsPageComponent]
})
export class ContactUsPageModule {}
