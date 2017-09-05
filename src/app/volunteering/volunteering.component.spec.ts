import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringComponent } from './volunteering.component';

describe('VolunteeringComponent', () => {
  let component: VolunteeringComponent;
  let fixture: ComponentFixture<VolunteeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
