import { TestBed } from '@angular/core/testing';

import { ResorterServicesService } from './resorter-services.service';

describe('ResorterServicesService', () => {
  let service: ResorterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResorterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
