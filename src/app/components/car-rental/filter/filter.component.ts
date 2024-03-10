import {Component, inject, TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterDataService } from '../../../modules/core/services/filter-data.service';
import {
  startDateEarlierThanEndDateValidator,
  dateNotEarlierThanTodayValidator,
  priceRangeValidator,
  fuelConsumptionRangeValidator,
  engineTypeRangeValidator
} from './filter-validator';
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterForm!: FormGroup;
  minStartDate = new Date().toISOString().split('T')[0];
  private offcanvasService = inject(NgbOffcanvas);
  constructor(
      private formBuilder: FormBuilder,
      private filterDataService: FilterDataService
  ) {}

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      start_date: [this.minStartDate, [Validators.required, dateNotEarlierThanTodayValidator()]],
      end_date: [this.minStartDate, [Validators.required]],
      min_price: [0, [Validators.min(0), Validators.max(1000)]],
      max_price: [1000, [Validators.min(0), Validators.max(1000)]],
      body_types: ['სედანი'],
      transmission: ['Automatic'],
      pick_up: ['Tbilisi'],
      fuels: [''],
      drives: [''],
      year: [2000],
      fuel_consumption_min: [0, [Validators.min(0), Validators.max(80)]],
      fuel_consumption_max: [80, [Validators.min(0), Validators.max(80)]],
      engine_type_min: [0, [Validators.min(0), Validators.max(20)]],
      engine_type_max: [20, [Validators.min(0), Validators.max(20)]],
      checkboxes: ['']
    }, { validator: [
        startDateEarlierThanEndDateValidator(),
        priceRangeValidator(),
        fuelConsumptionRangeValidator(),
        engineTypeRangeValidator()
      ]});
  }


  onSubmit() {
    if (this.filterForm.valid) {
      const filterData = this.filterForm.value;
      this.filterDataService.setFilterData(filterData);
      console.log(filterData);
    }
  }
  clearFilter() {
    this.filterDataService.setFilterData(null);
    this.filterForm = this.formBuilder.group({
      start_date: [this.minStartDate, [Validators.required, dateNotEarlierThanTodayValidator()]],
      end_date: [this.minStartDate, [Validators.required]],
      min_price: [0, [Validators.min(0), Validators.max(1000)]],
      max_price: [1000, [Validators.min(0), Validators.max(1000)]],
      body_types: ['სედანი'],
      transmission: ['Automatic'],
      pick_up: ['Tbilisi'],
      fuels: [''],
      drives: [''],
      year: [2000],
      fuel_consumption_min: [0, [Validators.min(0), Validators.max(80)]],
      fuel_consumption_max: [80, [Validators.min(0), Validators.max(80)]],
      engine_type_min: [0, [Validators.min(0), Validators.max(20)]],
      engine_type_max: [20, [Validators.min(0), Validators.max(20)]],
      checkboxes: ['']
    }, { validator: startDateEarlierThanEndDateValidator() });
  }
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  get end_date() {
    return this.filterForm.get('end_date');
  }
  log(x: any) {
    console.log(x);
  }
}
