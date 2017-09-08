import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  navLinks = [
    { location:'/overview',       label:'Overview',         icon:'account_circle' },
    { location:'/experience',     label:'Experience',       icon:'work' },
    { location:'/education',      label:'Education',        icon:'school' },
    { location:'/projects',       label:'Projects',         icon:'assignment' },
    { location:'/volunteering',   label:'Volunteering',     icon:'favorite' },
    { location:'/contact',        label:'Contact',          icon:'email' },
    // { location:'/about',         label:'About',             icon:'info' },
  ];
}
