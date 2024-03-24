import { Component } from '@angular/core';
import {AuthService} from "../../modules/core/services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
      constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
