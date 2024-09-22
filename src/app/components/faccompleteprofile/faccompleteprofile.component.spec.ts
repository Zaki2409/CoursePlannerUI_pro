import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaccompleteprofileComponent } from './faccompleteprofile.component';

describe('FaccompleteprofileComponent', () => {
  let component: FaccompleteprofileComponent;
  let fixture: ComponentFixture<FaccompleteprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaccompleteprofileComponent]
    });
    fixture = TestBed.createComponent(FaccompleteprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
