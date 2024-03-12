import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RentalFormService} from "../../../../modules/core/services/rental-form.service";

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.scss'
})
export class RentalFormComponent {
  rentalForm!: FormGroup;
  carId: string | undefined;
  formSubmitted = false;
  constructor(private fb: FormBuilder, private rentalFormService: RentalFormService) { }

  ngOnInit(): void {
    this.createRentalForm();
    this.rentalFormService.carId$.subscribe((carId) => {
      this.carId = carId;
    });
  }

  createRentalForm() {
    this.rentalForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pickup: ['თბილისი', [Validators.required]],
      pickup_time: ['', [Validators.required]],
      dropoff: ['თბილისი', [Validators.required]],
      dropoff_time: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      comment: [''],

    });
  }
  submitForm() {
    if (this.rentalForm.valid) {
      const rentalData = { ...this.rentalForm.value };
      rentalData.rent_date = this.rentalFormService.getStartDate();
      rentalData.unrent_date = this.rentalFormService.getEndDate();
      rentalData.car_id = this.carId;
        this.rentalFormService.takeOrder(rentalData).subscribe((response) => {

        });
    }
    this.formSubmitted = true;
  }
  get name() {
    return this.rentalForm.get('name');
  }
    get email() {
        return this.rentalForm.get('email');
    }
    get takePlace() {
        return this.rentalForm.get('takePlace');
    }
    get takeTime() {
        return this.rentalForm.get('takeTime');
    }
}
