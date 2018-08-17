import { TestBed, inject } from '@angular/core/testing';

import { BusCompanyService } from './bus-company.service';

describe('BusCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusCompanyService]
    });
  });

  it('should be created', inject([BusCompanyService], (service: BusCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
