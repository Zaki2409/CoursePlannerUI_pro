import { TestBed } from '@angular/core/testing';

import { HolidaylistService } from './holidaylist.service';

describe('HolidaylistService', () => {
  let service: HolidaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
