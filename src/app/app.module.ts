import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MaterialModule }           from './material/material.module';

import { AppRoutingModule }         from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import { AppComponent }             from './app.component';
import { HeaderComponent }          from './header/header.component';
import { HomeComponent }            from './home/home.component';
import { OverviewComponent }        from './overview/overview.component';
import { ExperienceComponent }      from './experience/experience.component';
import { EducationComponent }       from './education/education.component';
import { ProjectsComponent }        from './projects/projects.component';
import { VolunteeringComponent }    from './volunteering/volunteering.component';
import { AboutComponent }           from './about/about.component';
import { CvItemComponent }          from './cv-item/cv-item.component';
import { CvItemService }            from './cv-item/cv-item.service';
import { FooterComponent }          from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OverviewComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    VolunteeringComponent,
    AboutComponent,
    CvItemComponent,
    FooterComponent,
    ContactComponent,
  ],
  providers: [
    CvItemService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
