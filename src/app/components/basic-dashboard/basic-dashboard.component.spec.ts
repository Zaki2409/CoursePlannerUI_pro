import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDashboardComponent } from './basic-dashboard.component';

describe('BasicDashboardComponent', () => {
  let component: BasicDashboardComponent;
  let fixture: ComponentFixture<BasicDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicDashboardComponent]
    });
    fixture = TestBed.createComponent(BasicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
