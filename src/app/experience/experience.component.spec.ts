import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentsComponent } from './employments.component';

describe('EmploymentsComponent', () => {
  let component: EmploymentsComponent;
  let fixture: ComponentFixture<EmploymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
