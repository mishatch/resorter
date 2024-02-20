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
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      takePlace: ['', [Validators.required]],
      takeTime: ['', [Validators.required]],
      returnPlace: ['', [Validators.required]],
      returnTime: ['', [Validators.required]],
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
