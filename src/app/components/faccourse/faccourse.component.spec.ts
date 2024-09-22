import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaccourseComponent } from './faccourse.component';

describe('FaccourseComponent', () => {
  let component: FaccourseComponent;
  let fixture: ComponentFixture<FaccourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaccourseComponent]
    });
    fixture = TestBed.createComponent(FaccourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
