import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains: string[] = environment.EMAIL_DOMAINS;
  errors: string | undefined;
  constructor(private userService: UserService, private router: Router) {}

  loginFormSubminHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe({
      next: (data) => {
        localStorage.setItem('UserId', data._id);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert(error.error.message);
        this.errors = error.error.message;
      },
    });
  }
}
