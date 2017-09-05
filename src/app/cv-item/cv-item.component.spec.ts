import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvItemComponent } from './cv-item.component';

describe('CvItemComponent', () => {
  let component: CvItemComponent;
  let fixture: ComponentFixture<CvItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
