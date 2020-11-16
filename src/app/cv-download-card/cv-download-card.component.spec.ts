import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module';
import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { CvItemService } from '../cv-item/cv-item.service';

import { PdfComponent } from '../pdf/pdf.component';

import { CvDownloadCardComponent } from './cv-download-card.component';

describe('CvDownloadCardComponent', () => {
  let component: CvDownloadCardComponent;
  let fixture: ComponentFixture<CvDownloadCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ CvDownloadCardComponent, PdfComponent ],
      providers: [ CvItemService, FeatureToggleService, LocalizationService ],
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
