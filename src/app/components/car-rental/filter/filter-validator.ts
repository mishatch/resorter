import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function priceRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const minPrice = control.get('minPrice')?.value;
    const maxPrice = control.get('maxPrice')?.value;

    if (minPrice > maxPrice) {
        return { priceMismatch: true };
    }
    return null;
}

export function dateRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const startDate = control.get('startDate')?.value;
    const endDate = control.get('endDate')?.value;

    if (startDate > endDate) {
        return { dateMismatch: true };
    }
    return null;
}
