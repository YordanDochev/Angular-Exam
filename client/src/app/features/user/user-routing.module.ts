import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthActivate } from 'src/app/guards/auth.activate';
import { UserActivate } from 'src/app/guards/user.activate';
import { MyPostsComponent } from './my-posts/my-posts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UserActivate] },
  {
    path: 'register',
    canActivate: [UserActivate],
    component: RegisterComponent,
  },
  {path: 'my-profile', component:MyPostsComponent, canActivate: [AuthActivate]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
