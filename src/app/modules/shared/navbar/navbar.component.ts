import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarOpen: boolean = false;
  private modalService = inject(NgbModal);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isNavbarOpen = false; // Close the navbar after navigation
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
