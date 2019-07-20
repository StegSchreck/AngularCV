/* tslint:disable:import-spacing */
import { NgModule }                 from '@angular/core';
import { BrowserModule, Title }     from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MaterialModule }           from './material/material.module';

import { AppRoutingModule }         from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import { AppComponent }             from './app.component';
import { HeaderComponent }          from './header/header.component';
import { OverviewComponent }        from './overview/overview.component';
import { ExperienceComponent }      from './experience/experience.component';
import { EducationComponent }       from './education/education.component';
import { PublicationsComponent }    from './publications/publications.component';
import { ProjectsComponent }        from './projects/projects.component';
import { VolunteeringComponent }    from './volunteering/volunteering.component';
import { AboutComponent }           from './about/about.component';
import { CvItemComponent }          from './cv-item/cv-item.component';
import { CvItemDirective }          from './cv-item/cv-item.directive';
import { CvItemService }            from './cv-item/cv-item.service';
import { FooterComponent }          from './footer/footer.component';
import { ContactComponent }         from './contact/contact.component';
import { PdfComponent }             from './pdf/pdf.component';
import { CvDownloadCardComponent }  from './cv-download-card/cv-download-card.component';
import { PictureModalComponent }    from './picture-modal/picture-modal.component';
import { FeatureToggleService }     from './feature-toggle/feature-toggle.service';
import { LocalizationService }      from './l10n/l10n.service';
import { LocalizationComponent }    from './l10n/l10n.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    ExperienceComponent,
    EducationComponent,
    PublicationsComponent,
    ProjectsComponent,
    VolunteeringComponent,
    AboutComponent,
    CvItemComponent,
    FooterComponent,
    ContactComponent,
    PdfComponent,
    CvDownloadCardComponent,
    PictureModalComponent,
    LocalizationComponent,
    CvItemDirective,
  ],
  providers: [
    Title,
    CvItemService,
    FeatureToggleService,
    LocalizationService,
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    PictureModalComponent,
  ],
})
export class AppModule { }
