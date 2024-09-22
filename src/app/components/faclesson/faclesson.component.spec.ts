import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaclessonComponent } from './faclesson.component';

describe('FaclessonComponent', () => {
  let component: FaclessonComponent;
  let fixture: ComponentFixture<FaclessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaclessonComponent]
    });
    fixture = TestBed.createComponent(FaclessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
