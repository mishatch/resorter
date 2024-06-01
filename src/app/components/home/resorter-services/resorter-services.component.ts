import { Component, OnInit } from '@angular/core';
import { ResorterServicesService } from "../../../modules/core/services/resorter-services.service";
import { ResorterServices } from "../../../models/services.model";
import { LoadingService } from '../../../modules/core/services/loading.service';

@Component({
    selector: 'app-resorter-services',
    templateUrl: './resorter-services.component.html',
    styleUrls: ['./resorter-services.component.scss']
})
export class ResorterServicesComponent implements OnInit {
    resorterServices: ResorterServices[] = [];

    constructor(
        private services: ResorterServicesService,
        private loadingService: LoadingService
    ) { }

    ngOnInit(): void {
        this.loadingService.setLoading(true);

        const minLoadingTime = 1500;
        const startTime = Date.now();

        this.services.getServices().subscribe((data: any) => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = minLoadingTime - elapsedTime;

            if (remainingTime > 0) {
                setTimeout(() => {
                    this.resorterServices = data.services;
                    this.loadingService.setDataLoaded(true);
                }, remainingTime);
            } else {
                this.resorterServices = data.services;
                this.loadingService.setDataLoaded(true);
            }
        });
    }
}