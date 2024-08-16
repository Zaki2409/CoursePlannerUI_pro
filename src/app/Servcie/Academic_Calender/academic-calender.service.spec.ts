import { TestBed } from '@angular/core/testing';

import { AcademicCalenderService } from './academic-calender.service';

describe('AcademicCalenderService', () => {
  let service: AcademicCalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicCalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
