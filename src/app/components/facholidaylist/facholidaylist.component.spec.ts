import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacholidaylistComponent } from './facholidaylist.component';

describe('FacholidaylistComponent', () => {
  let component: FacholidaylistComponent;
  let fixture: ComponentFixture<FacholidaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacholidaylistComponent]
    });
    fixture = TestBed.createComponent(FacholidaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
