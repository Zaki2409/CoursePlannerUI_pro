import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydashbaordComponent } from './facultydashbaord.component';

describe('FacultydashbaordComponent', () => {
  let component: FacultydashbaordComponent;
  let fixture: ComponentFixture<FacultydashbaordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultydashbaordComponent]
    });
    fixture = TestBed.createComponent(FacultydashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
