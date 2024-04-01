import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { environment } from '../../../../environments/environment.development';
import { usernameValidator } from 'src/app/shared/utils/username-validator';
import { phoneNumberValidator } from 'src/app/shared/utils/phoneNumber-validator';
import { matchPasswordValidator } from 'src/app/shared/utils/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isFormValid: boolean = true;
  errors: string | undefined;
  form = this.fb.group({
    username: ['', [Validators.required, usernameValidator()]],
    email: [
      '',
      [Validators.required, emailValidator(environment.EMAIL_DOMAINS)],
    ],
    tel: ['', [Validators.required, phoneNumberValidator()]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required, Validators.minLength(5)]],
      },
      { validators: [matchPasswordValidator('password', 'rePassword')] }
    ),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  registerFormSubmitHandler(): void {
    if (this.form.invalid) {
      this.isFormValid = false;
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
      .subscribe({
        next: (data) => {
          localStorage.setItem('UserId', data._id);
        },
        error: (error) => {
          this.errors = error.error.message;
          alert(error.error.message);
        },
        complete: () => {
          this.router.navigate(['/home']);
        },
      });
  }
}
