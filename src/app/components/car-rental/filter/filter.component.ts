import {Component, inject, TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterDataService } from '../../../modules/core/services/filter-data.service';
import { priceRangeValidator, dateRangeValidator } from './filter-validator';
import {NgbOffcanvas, OffcanvasDismissReasons} from "@ng-bootstrap/ng-bootstrap";

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
      start_date: [this.minStartDate, Validators.required],
      end_date: [this.minStartDate, Validators.required],
      min_price: [0, [Validators.min(0), Validators.max(1000)]],
      max_price: [1000, [Validators.min(0), Validators.max(1000)]],
      body_types: [''],
      transmission: [''],
      pick_up: ['თბილისი'],
      fuels: [''],
      drives: [''],
      year: [2000],
      fuel_consumption_min: [0, [Validators.min(0), Validators.max(80)]],
      fuel_consumption_max: [80, [Validators.min(0), Validators.max(80)]],
      engine_type_min: [0, [Validators.min(0), Validators.max(20)]],
      engine_type_max: [20, [Validators.min(0), Validators.max(20)]],
      checkboxes: ['']
    }, { validator: [priceRangeValidator, dateRangeValidator] });
  }


  onSubmit() {
    if (this.filterForm.valid) {
      const filterData = this.filterForm.value;
      this.filterDataService.setFilterData(filterData);
      console.log(filterData);
    }
  }
  clearFilter() {
    this.filterForm.reset();
    this.filterDataService.setFilterData(null);
  }
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

}
