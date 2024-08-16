import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHolidayListComponent } from './create-holiday-list.component';

describe('CreateHolidayListComponent', () => {
  let component: CreateHolidayListComponent;
  let fixture: ComponentFixture<CreateHolidayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHolidayListComponent]
    });
    fixture = TestBed.createComponent(CreateHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
