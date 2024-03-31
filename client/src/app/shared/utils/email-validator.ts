import { ValidatorFn } from '@angular/forms';

export function emailValidator(domais: String[]): ValidatorFn {
  const domainsString = domais.join('|');
  const regEx = new RegExp(`^.{6,}@gmail\.(${domainsString})$`);

  return (control) => {
    const isEmailValid = regEx.test(control.value);
    return isEmailValid ? null : { emailValidator: true };
  };
}
