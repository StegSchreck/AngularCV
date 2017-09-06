import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HomeComponent }          from './home/home.component';
import { GeneralComponent }       from './general/general.component';
import { EmploymentsComponent }   from './employments/employments.component';
import { EducationComponent }     from './education/education.component';
import { ProjectsComponent }      from './projects/projects.component';
import { VolunteeringComponent }  from './volunteering/volunteering.component';
import { AboutComponent }         from './about/about.component';

const routes: Routes = [
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  { path: 'general',        component: GeneralComponent },
  { path: 'employments',    component: EmploymentsComponent },
  { path: 'education',      component: EducationComponent },
  { path: 'projects',       component: ProjectsComponent },
  { path: 'volunteering',   component: VolunteeringComponent },
  { path: 'about',          component: AboutComponent },
  { path: '**',             redirectTo: 'home' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
