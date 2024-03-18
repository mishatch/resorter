import { Component, OnInit } from '@angular/core';
import { ResorterServicesService } from "../../../modules/core/services/resorter-services.service";

@Component({
    selector: 'app-resorter-services',
    templateUrl: './resorter-services.component.html',
    styleUrls: ['./resorter-services.component.scss']
})
export class ResorterServicesComponent implements OnInit {
    resorterServices: any[] = [];
    isLoading: boolean = true; // Set to true initially
    constructor(private services: ResorterServicesService) { }

    ngOnInit(): void {
        this.services.getServices().subscribe((data: any) => {
            this.isLoading = false;
            this.resorterServices = data.services;
            this.toggleScroll();
        });
    }

    toggleScroll(): void {
        if (this.isLoading) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    }
}
