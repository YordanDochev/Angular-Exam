import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomePageModule } from './home-page/home-page.module';
import { SharedModule } from './shared/shared.module';
import { ContactUsPageModule } from './contact-us-page/contact-us-page.module';
import { HttpClientModule } from '@angular/common/http';
import { appRequestsInterceptorProvider } from './app-requests.interceptor';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserModule } from './features/user/user.module';
import { CarModule } from './features/car/car.module';

@NgModule({
  declarations: [AppComponent, AuthenticationComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomePageModule,
    ContactUsPageModule,
    CarModule,
    UserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [appRequestsInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
