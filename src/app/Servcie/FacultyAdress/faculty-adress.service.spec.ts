import { TestBed } from '@angular/core/testing';

import { FacultyAdressService } from './faculty-adress.service';

describe('FacultyAdressService', () => {
  let service: FacultyAdressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyAdressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
