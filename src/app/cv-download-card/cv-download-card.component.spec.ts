import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDownloadCardComponent } from './cv-download-card.component';

describe('CvDownloadCardComponent', () => {
  let component: CvDownloadCardComponent;
  let fixture: ComponentFixture<CvDownloadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvDownloadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDownloadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
