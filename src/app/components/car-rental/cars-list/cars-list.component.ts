import {Component, ElementRef, OnInit} from '@angular/core';
import { CarsService } from "../../../modules/core/services/cars.service";
import { Filter } from "../../../models/filter.model";
import { FilterDataService } from '../../../modules/core/services/filter-data.service';
import {Car} from "../../../models/carInfo.model";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  cars: Array<Car> = [];
  filterData!: Filter;
  noCarsFound = false;
  isLoading = true;
  currentPage = 1;
  itemsPerPage = 12;
  totalPages: number[] = [];

  constructor(
      private carsService: CarsService,
      private filterDataService: FilterDataService,
      private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.filterDataService.getFilterData().subscribe((filterData: Filter) => {
      this.filterData = filterData;
      this.getCars(filterData);
    });
  }

  getCars(filterData: Filter) {
    this.carsService.getCars(filterData).subscribe((data: {
        cars: Array<Car>
    }) => {
      console.log(data.cars)
      this.cars = data.cars;
      this.noCarsFound = this.cars.length === 0;
      this.isLoading = false;
      this.calculateTotalPages();
    });
  }

  calculateTotalPages() {
    const totalItems = this.cars ? this.cars.length : 0;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    const maxPagesToShow = 5;

    let startPage: number, endPage: number;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const halfPagesToShow = Math.floor(maxPagesToShow / 2);
      if (this.currentPage <= halfPagesToShow + 1) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (this.currentPage + halfPagesToShow >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = this.currentPage - halfPagesToShow;
        endPage = this.currentPage + halfPagesToShow; // Adjusted to display correct end page
      }
    }
    this.totalPages = Array(endPage - startPage + 1).fill(0).map((x, i) => startPage + i);
  }


  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, (this.cars ? this.cars.length - 1 : 0));
  }
  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.cars.length) {
      this.currentPage++;
      this.calculateTotalPages();
    }
    this.scrollToTop();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.calculateTotalPages();
    }
    this.scrollToTop();
  }

  goToPage(page: number) {
    if (page >= 1 ) {
      this.currentPage = page;
      this.calculateTotalPages();
    }
    this.scrollToTop();
  }
  private scrollToTop() {
    // Scroll to top of the page
    this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
