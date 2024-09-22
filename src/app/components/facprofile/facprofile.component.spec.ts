import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacprofileComponent } from './facprofile.component';

describe('FacprofileComponent', () => {
  let component: FacprofileComponent;
  let fixture: ComponentFixture<FacprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacprofileComponent]
    });
    fixture = TestBed.createComponent(FacprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
