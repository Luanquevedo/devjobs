import { TestBed } from '@angular/core/testing';

import { VacanciesApiService } from './vacancies-api.service';

describe('VacananciesApiService', () => {
  let service: VacanciesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacanciesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
