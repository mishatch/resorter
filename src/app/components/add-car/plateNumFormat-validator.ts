import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function
export function plateNumFormatValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value: string = control.value;
        const pattern: RegExp = /^[A-Za-z]{2}-\d{3}-[A-Za-z]{2}$/;
        if (value && !pattern.test(value)) {
            return { 'invalidFormat': true };
        }
        return null;
    };
}
