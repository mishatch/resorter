import { TestBed } from '@angular/core/testing';

import { RentalFormService } from './rental-form.service';

describe('RentalFormService', () => {
  let service: RentalFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
