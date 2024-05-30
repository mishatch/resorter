import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from "../../../models/login.model";
import {BehaviorSubject, tap} from "rxjs";
import {LoginRes} from "../../../models/auth.mode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://hammerhead-app-25bv9.ondigitalocean.app/";
  public $loginStatus = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient) { }

  login(loginData: Login) {
    return this.http.post(`${this.apiUrl}/user/login`, loginData)
        .pipe(
            tap((res: LoginRes) => {
              if (!res.Error) {
                localStorage.setItem('isLoggedIn', 'true');
                this.$loginStatus.next(true);
              }
            })
        );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.$loginStatus.next(false);
  }

  registration(registrationData: any) {
    return this.http.post(`${this.apiUrl}/add/user`, registrationData);
  }
}
