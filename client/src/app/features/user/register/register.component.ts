import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: [''],
    email: [''],
    tel: [''],
    passGroup: this.fb.group({
      password: [''],
      rePassword: [''],
    }),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  registerFormSubmitHandler(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      tel,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService
      .register(username!, email!, tel!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
