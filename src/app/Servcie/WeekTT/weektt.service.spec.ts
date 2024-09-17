import { TestBed } from '@angular/core/testing';

import { WeekttService } from './weektt.service';

describe('WeekttService', () => {
  let service: WeekttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
