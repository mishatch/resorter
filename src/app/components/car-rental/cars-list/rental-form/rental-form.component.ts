import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.scss'
})
export class RentalFormComponent {
  rentalForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRentalForm();

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
      console.log('Form submitted successfully');
      console.log(this.rentalForm.value);
    } else {
      console.log('Form has errors, please check');
    }
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
