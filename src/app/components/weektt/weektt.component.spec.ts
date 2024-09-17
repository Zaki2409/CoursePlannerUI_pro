import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekttComponent } from './weektt.component';

describe('WeekttComponent', () => {
  let component: WeekttComponent;
  let fixture: ComponentFixture<WeekttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekttComponent]
    });
    fixture = TestBed.createComponent(WeekttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
