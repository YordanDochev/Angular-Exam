import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    username: ['',Validators.required],
    email: ['',Validators.required],
    tel: ['',Validators.required],
    passGroup: this.fb.group({
      password: ['',Validators.required],
      rePassword: ['',Validators.required],
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
      .subscribe((data) => {
        localStorage.setItem('UserId', data._id);
        this.router.navigate(['/home']);
      });
  }
}
