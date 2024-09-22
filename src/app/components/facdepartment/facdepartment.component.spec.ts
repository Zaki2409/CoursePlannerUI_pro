import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacdepartmentComponent } from './facdepartment.component';

describe('FacdepartmentComponent', () => {
  let component: FacdepartmentComponent;
  let fixture: ComponentFixture<FacdepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacdepartmentComponent]
    });
    fixture = TestBed.createComponent(FacdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
