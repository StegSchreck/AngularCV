import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module';
import { CvItemService } from '../cv-item/cv-item.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { LocalizationService } from '../l10n/l10n.service';

import { CvItemComponent } from '../cv-item/cv-item.component';

import { EducationComponent } from './education.component';

describe('PublicationsComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ EducationComponent, CvItemComponent ],
      providers: [ CvItemService, FeatureToggleService, LocalizationService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
