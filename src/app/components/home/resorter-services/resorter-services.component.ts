import { Component, OnInit } from '@angular/core';
import { ResorterServicesService } from "../../../modules/core/services/resorter-services.service";

@Component({
    selector: 'app-resorter-services',
    templateUrl: './resorter-services.component.html',
    styleUrls: ['./resorter-services.component.scss']
})
export class ResorterServicesComponent implements OnInit {
    resorterServices!: any[];

    constructor(private services: ResorterServicesService) { }

    ngOnInit(): void {
        this.services.getServices().subscribe((data: any) => {
            this.resorterServices = data.services;
        });
    }
}
