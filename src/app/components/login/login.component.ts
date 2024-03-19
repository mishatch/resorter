import {Component, inject, Input} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private modalService = inject(NgbModal);
  @Input() modalRef!: NgbModalRef;
  closeModal() {
    this.modalRef.close();
  }
}
