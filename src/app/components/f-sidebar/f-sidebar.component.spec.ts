import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSidebarComponent } from './f-sidebar.component';

describe('FSidebarComponent', () => {
  let component: FSidebarComponent;
  let fixture: ComponentFixture<FSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FSidebarComponent]
    });
    fixture = TestBed.createComponent(FSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
