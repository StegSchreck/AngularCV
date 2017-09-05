import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesComponent } from './hobbies.component';

describe('HobbiesComponent', () => {
  let component: HobbiesComponent;
  let fixture: ComponentFixture<HobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
