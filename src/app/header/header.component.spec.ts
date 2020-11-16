import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { LocalizationService } from '../l10n/l10n.service';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { CvItemService } from '../cv-item/cv-item.service';

import { OverviewComponent } from '../overview/overview.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { VolunteeringComponent } from '../volunteering/volunteering.component';
import { PublicationsComponent } from '../publications/publications.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CvDownloadCardComponent } from '../cv-download-card/cv-download-card.component';
import { CvItemComponent } from '../cv-item/cv-item.component';
import { PdfComponent } from '../pdf/pdf.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterModule, AppRoutingModule ],
      declarations: [
        HeaderComponent, PdfComponent, OverviewComponent, ExperienceComponent, EducationComponent, ProjectsComponent, VolunteeringComponent,
        PublicationsComponent, ContactComponent, AboutComponent, CvDownloadCardComponent, CvItemComponent ],
      providers: [ CvItemService, FeatureToggleService, LocalizationService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
