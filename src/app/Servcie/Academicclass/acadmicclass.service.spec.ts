import { TestBed } from '@angular/core/testing';

import { AcadmicclassService } from './acadmicclass.service';

describe('AcadmicclassService', () => {
  let service: AcadmicclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcadmicclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
