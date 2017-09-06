import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MaterialModule }           from './material/material.module';

import { AppRoutingModule }         from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
import { InMemoryDataService }      from './cv-item/in-memory-data.service';

import { AppComponent }             from './app.component';
import { HeaderComponent }          from './header/header.component';
import { HomeComponent }            from './home/home.component';
import { GeneralComponent }         from './general/general.component';
import { EmploymentsComponent }     from './employments/employments.component';
import { EducationComponent }       from './education/education.component';
import { ProjectsComponent }        from './projects/projects.component';
import { VolunteeringComponent }    from './volunteering/volunteering.component';
import { HobbiesComponent }         from './hobbies/hobbies.component';
import { LinksComponent }           from './links/links.component';
import { AboutComponent }           from './about/about.component';
import { CvItemComponent }          from './cv-item/cv-item.component';
import { CvItemService }            from './cv-item/cv-item.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GeneralComponent,
    EmploymentsComponent,
    EducationComponent,
    ProjectsComponent,
    VolunteeringComponent,
    HobbiesComponent,
    LinksComponent,
    AboutComponent,
    CvItemComponent,
  ],
  providers: [
    CvItemService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
