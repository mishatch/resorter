import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../modules/core/services/auth.service";
import { georgianPhoneNumberValidator } from "../../../modules/core/validators/georgian-phone.validator";
import {LoginRes} from "../../../models/auth.mode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private modalService = inject(NgbModal);
  @Input() modalRef!: NgbModalRef;
  loginForm!: FormGroup;
  registrationForm!: FormGroup;
  submitClicked: boolean = false;
  responseError: boolean = false;
  registration: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
    this.registrationForm = this.formBuilder.group({
      company_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['+995', [Validators.required, georgianPhoneNumberValidator()]],
    });

    // Initialize login status from local storage
    if (this.authService.isLoggedIn()) {
      this.authService.$loginStatus.next(true);
    }
  }

  closeModal() {
    this.modalRef.close();
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe((res: LoginRes) => {
        this.submitClicked = true;
        if (res.Error) {
          this.responseError = true;
        } else {
          this.responseError = false;
        }
      });
    }
  }

  onRegistrationSubmit() {
    if (this.registrationForm.valid) {
      this.authService.registration(this.registrationForm.value).subscribe((res: any) => {
        console.log(res);
        this.submitClicked = true;
        this.responseError = !!res.Error;
      });
    }
  }

  registrationReq(){
    this.registration = true;
  }

  loginReq(){
    this.registration = false;
  }


}
