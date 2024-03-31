import { ValidatorFn } from '@angular/forms';

export function urlAddressValidator(): ValidatorFn {
  const regEx = new RegExp(/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/g);

  return (control) => {
    
    const isUrlValid = regEx.test(control.value);
    return isUrlValid ? null : { urlAddressValidator: true };
  };
}
