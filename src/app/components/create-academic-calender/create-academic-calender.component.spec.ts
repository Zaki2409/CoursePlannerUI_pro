import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcademicCalenderComponent } from './create-academic-calender.component';

describe('CreateAcademicCalenderComponent', () => {
  let component: CreateAcademicCalenderComponent;
  let fixture: ComponentFixture<CreateAcademicCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAcademicCalenderComponent]
    });
    fixture = TestBed.createComponent(CreateAcademicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
