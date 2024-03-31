import { ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(
  passwordControlName: string,
  rePasswordControlName: string
): ValidatorFn {
  return (control) => {
    const passwordControlValue = control.get(passwordControlName)?.value;
    const rePasswordControlValue = control.get(rePasswordControlName)?.value;
    const isMatchPassword = passwordControlValue === rePasswordControlValue ;
    
    return isMatchPassword ? null : { matchPasswordValidator: true };
  };
}
