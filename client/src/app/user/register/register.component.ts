import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: [''],
    email: [''],
    phoneNumber: [''],
    passGroup: this.fb.group({
      password: [''],
      rePassword: [''],
    }),
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  registerFormSubmitHandler(): void {
    
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      phoneNumber,
      passGroup: { password, rePassword } = {},
    } = this.form.value;
   
    
    this.userService.register(
      username!,
      email!,
      phoneNumber!,
      password!,
      rePassword!
    );
  }
}
