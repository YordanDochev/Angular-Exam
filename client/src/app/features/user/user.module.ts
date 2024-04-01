import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyPostsComponent } from './my-posts/my-posts.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, MyPostsComponent],
  imports: [CommonModule, UserRoutingModule,SharedModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  exports: [LoginComponent, RegisterComponent],
})
export class UserModule {}
