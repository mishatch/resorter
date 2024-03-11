import { Component } from '@angular/core';
import {FilterDataService} from "../../../../modules/core/services/filter-data.service";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent {
  currentDate = new Date().toISOString().split('T')[0];
  pickupTime: string = this.currentDate;
  returnTime: string = this.currentDate;
  takePlace: string = "Tbilisi";
  price: number = 20;
  pickupDate: Date = new Date(this.pickupTime);
  returnDate: Date = new Date(this.returnTime);
  timeDifferenceMs: number = this.returnDate.getTime() - this.pickupDate.getTime();
  timeDifferenceDays: number = Math.ceil(this.timeDifferenceMs / (1000 * 60 * 60 * 24));
  rentTime: number = this.timeDifferenceDays + 1;
    constructor(private filterDataService: FilterDataService) {
    this.filterDataService.getFilterData().subscribe((filterData) => {
                if(filterData) {
                  this.pickupDate = new Date(filterData.start_date);
                    this.returnDate = new Date(filterData.end_date);
                    this.timeDifferenceMs = this.returnDate.getTime() - this.pickupDate.getTime();
                    this.timeDifferenceDays = Math.ceil(this.timeDifferenceMs / (1000 * 60 * 60 * 24));
                    this.rentTime = this.timeDifferenceDays + 1;
                    this.takePlace = filterData.pick_up;
                }
            });

    }
  formatDate(date: Date): string {
    const monthsGeorgian = [
      "იანვარი",
      "თებერვალი",
      "მარტი",
      "აპრილი",
      "მაისი",
      "ივნისი",
      "ივლისი",
      "აგვისტო",
      "სექტემბერი",
      "ოქტომბერი",
      "ნოემბერი",
      "დეკემბერი"
    ];

    const day = date.getDate();
    const month = monthsGeorgian[date.getMonth()]; // Get month name from Georgian translations
    return `${day} ${month}`;
  }
}
