import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormLoginComponent } from './login/form-login/form-login.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, FormLoginComponent ],
  imports: [CommonModule],
  exports: [LoginComponent,RegisterComponent],
})
export class UserModule {}
