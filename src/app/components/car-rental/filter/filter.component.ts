import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterDataService } from '../../../modules/core/services/filter-data.service';
import { priceRangeValidator, dateRangeValidator } from './filter-validator';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterForm!: FormGroup;
  minStartDate = new Date().toISOString().split('T')[0];

  constructor(
      private formBuilder: FormBuilder,
      private filterDataService: FilterDataService // Inject FilterDataService
  ) {}

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      minPrice: [0, [Validators.required, Validators.min(0), Validators.max(1000)]],
      maxPrice: [1000, [Validators.required, Validators.min(0), Validators.max(1000)]],
      carType: ['', [Validators.required]],
      driveType: ['', [Validators.required]],
    }, { validator: [priceRangeValidator, dateRangeValidator] });
  }

  onSubmit() {
    if (this.filterForm.valid) {
      const filterData = this.filterForm.value;
      this.filterDataService.setFilterData(filterData);
      console.log(filterData);
    }
  }
}
