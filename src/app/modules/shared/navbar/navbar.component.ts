import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarOpen: boolean = false;
  private modalService = inject(NgbModal);
  isLoggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    this.authService.$loginStatus.subscribe((res: any) => {
      this.isLoggedIn = res;
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isNavbarOpen = false;
      }
    });
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
