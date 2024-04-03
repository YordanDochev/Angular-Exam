import { ValidatorFn } from "@angular/forms";

export function phoneNumberValidator():ValidatorFn{

  const regEx = new RegExp(/^\+?(?:[1-9]\d*|\d+(?:-\d+)*)$/g);


    return (control) => {
        const isPhoneValid = regEx.test(control.value)
        return isPhoneValid ? null : {phoneNumberValidator:true}
    }
}