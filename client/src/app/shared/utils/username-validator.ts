import { ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  const regEx = new RegExp(`^[a-zA-Z]{2,}(?:['\-][a-zA-Z]+)?$`);

  return (control) => {
    const isUsernameValid = regEx.test(control.value);
    return isUsernameValid ? null : { usernameValidator: true };
  };
}
