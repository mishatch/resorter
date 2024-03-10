import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateNotEarlierThanTodayValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const selectedDate = new Date(control.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate <= today) {
            return { 'dateNotEarlierThanToday': true };
        }
        return null;
    };
}



export function startDateEarlierThanEndDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const startDate = new Date(control.get('start_date')?.value);
        const endDate = new Date(control.get('end_date')?.value);
        if (startDate > endDate) {
            return { 'startDateNotEarlierThanEndDate': true };
        }
        return null;
    };
}
export function priceRangeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const minPrice = control.get('min_price')?.value;
        const maxPrice = control.get('max_price')?.value;
        if (minPrice !== null && maxPrice !== null && minPrice >= maxPrice) {
            return { 'priceRangeInvalid': true };
        }
        return null;
    };
}
export function fuelConsumptionRangeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const minValue = control.get('fuel_consumption_min')?.value;
        const maxValue = control.get('fuel_consumption_max')?.value;
        if (minValue !== null && maxValue !== null && minValue >= maxValue) {
            return { 'fuelConsumptionRangeInvalid': true };
        }
        return null;
    };
}

export function engineTypeRangeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const minValue = control.get('engine_type_min')?.value;
        const maxValue = control.get('engine_type_max')?.value;
        if (minValue !== null && maxValue !== null && minValue >= maxValue) {
            return { 'engineTypeRangeInvalid': true };
        }
        return null;
    };
}
