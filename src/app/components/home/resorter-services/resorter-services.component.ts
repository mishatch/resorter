import { Component, OnInit } from '@angular/core';
import { ResorterServicesService } from "../../../modules/core/services/resorter-services.service";
import {ResorterServices} from "../../../models/services.model";

@Component({
    selector: 'app-resorter-services',
    templateUrl: './resorter-services.component.html',
    styleUrls: ['./resorter-services.component.scss']
})
export class ResorterServicesComponent implements OnInit {
    resorterServices: ResorterServices[] = [];
    isLoading: boolean = true;
    isFadingOut: boolean = false;
    constructor(private services: ResorterServicesService) { }

    ngOnInit(): void {
        const minLoadingTime = 1000;
        const startTime = Date.now();

        this.services.getServices().subscribe((data: any) => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = minLoadingTime - elapsedTime;

            if (remainingTime > 0) {
                setTimeout(() => {
                    this.startFadeOut();
                    this.resorterServices = data.services;
                    this.toggleScroll();
                }, remainingTime);
            } else {
                this.startFadeOut();
                this.resorterServices = data.services;
                this.toggleScroll();
            }
        });
    }

    startFadeOut(): void {
        this.isFadingOut = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }


    toggleScroll(): void {
        if (this.isLoading) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    }
}
