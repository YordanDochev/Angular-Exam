import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { emailValidator } from '../../utils/email-validator';
import { usernameValidator } from '../../utils/username-validator';
import { phoneNumberValidator } from '../../utils/phoneNumber-validator';

@Directive({
  selector: '[appUserValidator]',
  providers: [
    {
      multi: true,
      useExisting: ValidatorDirective,
      provide: NG_VALIDATORS,
    },
  ],
})
export class ValidatorDirective implements Validator, OnChanges {
  @Input('appEmail') appEmail: string[] = [];
  constructor() {}

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmail'];

    if (currentValue) {
      this.validate = phoneNumberValidator();
      this.validator = emailValidator(currentValue);
      this.validator = usernameValidator();
    }
  }
}
