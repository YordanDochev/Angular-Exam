import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, FormLoginComponent],
  imports: [CommonModule, UserRoutingModule,FormsModule,ReactiveFormsModule],
  exports: [LoginComponent, RegisterComponent],
})
export class UserModule {}
