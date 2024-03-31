import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { emailValidator } from '../utils/email-validator';
import { usernameValidator } from '../utils/username-validator';
import { phoneNumberValidator } from '../utils/phoneNumber-validator';
import { matchPasswordValidator } from '../utils/match-password-validator';

@Directive({
  selector: '[appValidator]',
  providers: [
    {
      multi: true,
      useExisting: ValidatorDirective,
      provide: NG_VALIDATORS,
    },
  ],
})
export class ValidatorDirective implements Validator, OnChanges, OnInit {
  @Input('appEmail') appEmail: string[] = [];
  constructor() {}

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmail'];

    if (currentValue) {
      this.validate = phoneNumberValidator();
      this.validator = emailValidator(currentValue);
      this.validator = usernameValidator();
    }
  }
}
