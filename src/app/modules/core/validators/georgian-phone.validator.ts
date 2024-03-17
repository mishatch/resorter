import { AbstractControl, ValidatorFn } from '@angular/forms';

export function georgianPhoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const phoneNumber = control.value;
        // Georgian phone number regex pattern
        const georgianPhoneNumberPattern = /^(?:(?:\+|00)995|0)(5|7|8|9)\d{8}$/;
        if (!georgianPhoneNumberPattern.test(phoneNumber)) {
            return { 'invalidPhoneNumber': true };
        }
        return null;
    };
}
