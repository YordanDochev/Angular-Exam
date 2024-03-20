import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomePageModule } from './home-page/home-page.module';
import { SharedModule } from './shared/shared.module';
import { CatalogPageModule } from './catalog-page/catalog-page.module';
import { DetailsPageModule } from './details-page/details-page.module';
import { ContactUsPageModule } from './contact-us-page/contact-us-page.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomePageModule,
    CatalogPageModule,
    DetailsPageModule,
    ContactUsPageModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
