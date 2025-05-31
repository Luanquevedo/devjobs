import { TestBed } from '@angular/core/testing';

import { VacananciesApiService } from './vacanancies-api.service';

describe('VacananciesApiService', () => {
  let service: VacananciesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacananciesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
