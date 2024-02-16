import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
      @Input() serviceName!: string;
      @Input() serviceContent!: string;
      @Input() serviceIcon!: string;
    sanitizedIcon: SafeHtml = '';

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(this.serviceIcon);
    }
}
