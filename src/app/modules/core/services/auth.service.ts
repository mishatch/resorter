import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../../../models/login.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://resorter.ge";
  public $loginStatus = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient) { }
  login(loginData: Login) {
    return this.http.post(`${this.apiUrl}/user/login`, loginData);
  }
}
