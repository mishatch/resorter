import { Component } from '@angular/core';
import { CarsService } from "../../../modules/core/services/cars.service";
import {Filter} from "../../../models/filter.model";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  cars: any;
  testData: Filter = {
    "start_date": "2024-02-01",
    "end_date": "2024-02-10",
    "pick_up": "Zestafoni",
    "min_price": 1,
    "max_price": 200,
    "body_types": ["Sedan","Cabriolet"],
    "fuels": ["Benzin", "Hybrid"],
    "drives": ["Front wheel","Rear wheel"],
    "transmission": "Automatic",
    "year": 2000,
    "fuel_consumption_min":0,
    "fuel_consumption_max":80,
    "engine_type_min":0,
    "engine_type_max":20
  }

  constructor(private carsService: CarsService) {
    this.carsService.getCars().subscribe((data: any) => {
      this.cars = data.cars;
      console.log(this.cars);
    });
  }
}
