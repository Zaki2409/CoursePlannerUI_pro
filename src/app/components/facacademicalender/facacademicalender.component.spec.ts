import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacacademicalenderComponent } from './facacademicalender.component';

describe('FacacademicalenderComponent', () => {
  let component: FacacademicalenderComponent;
  let fixture: ComponentFixture<FacacademicalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacacademicalenderComponent]
    });
    fixture = TestBed.createComponent(FacacademicalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
