import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthActivate } from 'src/app/guards/auth.activate';
import { UserActivate } from 'src/app/guards/user.activate';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UserActivate] },
  {
    path: 'register',
    canActivate: [UserActivate],
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
