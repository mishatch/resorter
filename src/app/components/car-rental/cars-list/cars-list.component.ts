import {Component, OnInit} from '@angular/core';
import { CarsService } from "../../../modules/core/services/cars.service";
import {Filter} from "../../../models/filter.model";
import { FilterDataService } from '../../../modules/core/services/filter-data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  cars: any;
  filterData!: Filter;

  constructor(
      private carsService: CarsService,
      private filterDataService: FilterDataService
  ) {}

  ngOnInit() {
    this.filterDataService.getFilterData().subscribe((filterData: Filter) => {
      this.filterData = filterData;
      this.getCars(filterData);
    });
  }

  getCars(filterData: Filter) {
    this.carsService.getCars(filterData).subscribe((data: any) => {
      this.cars = data.cars;
      console.log(this.cars);
    });
  }
}