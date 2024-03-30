import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent, NotFoundComponent],
  imports: [CommonModule,RouterModule],
  exports: [HeaderComponent, NavigationComponent, FooterComponent,NotFoundComponent],
})
export class CoreModule {}
