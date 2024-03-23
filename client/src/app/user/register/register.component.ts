import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    firstName: [''],
    email: [''],
    phoneNumber: [''],
    passGroup: this.fb.group({
      password: [''],
      rePassword: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}
}
