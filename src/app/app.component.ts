import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  navLinks = [
    { location:'/general',       label:'General',           icon:'account_circle' },
    { location:'/employments',   label:'Employments',       icon:'work' },
    { location:'/education',     label:'Education',         icon:'school' },
    { location:'/projects',      label:'Projects',          icon:'assignment' },
    { location:'/volunteering',  label:'Volunteering',      icon:'favorite' },
    { location:'/hobbies',       label:'Hobbies',           icon:'rowing' },
    { location:'/links',         label:'Links',             icon:'link' },
    { location:'/about',         label:'About',             icon:'info' },
  ]
}
