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
import { urlAddressValidator } from '../../utils/url-address-validator';
  
  @Directive({
    selector: '[appCarValidator]',
    providers: [
      {
        multi: true,
        useExisting: carValidatorDirective,
        provide: NG_VALIDATORS,
      },
    ],
  })
  export class carValidatorDirective implements Validator, OnChanges {
    constructor() {}
  
    validator: ValidatorFn = () => null;
  
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
      return this.validator(control);
    }
  
    ngOnInit(): void {
      console.log('invoked');
      
      
      this.validator = urlAddressValidator()
      
    }
    ngOnChanges(changes: SimpleChanges): void {
      
    }
}
  