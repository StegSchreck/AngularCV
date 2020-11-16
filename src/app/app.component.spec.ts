import { TestBed, waitForAsync } from '@angular/core/testing';
import {AppRoutingModule} from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { LocalizationService } from './l10n/l10n.service';
import { FeatureToggleService } from './feature-toggle/feature-toggle.service';
import { CvItemService } from './cv-item/cv-item.service';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { PdfComponent } from './pdf/pdf.component';
import { ContactComponent } from './contact/contact.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { LocalizationComponent } from './l10n/l10n.component';
import { CvDownloadCardComponent } from './cv-download-card/cv-download-card.component';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, MaterialModule, ],
      declarations: [
        AppComponent, AboutComponent, ExperienceComponent, EducationComponent, FooterComponent, HeaderComponent, OverviewComponent,
        PublicationsComponent, ProjectsComponent, VolunteeringComponent, ContactComponent, PdfComponent, CvItemComponent,
        LocalizationComponent, CvDownloadCardComponent,
      ],
      providers: [ CvItemService, FeatureToggleService, LocalizationService, ],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
