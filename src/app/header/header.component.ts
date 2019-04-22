import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  generalData;
  navLinks = [
    { location:'/overview',       label:'Inicio',         icon:'account_circle' },
    { location:'/experience',     label:'Experiencia',       icon:'work' },
    { location:'/education',      label:'Educación',        icon:'school' },
    { location:'/publications',   label:'Publicaciones',     icon:'record_voice_over' },
    { location:'/projects',       label:'Proyectos',         icon:'assignment' },
    { location:'/volunteering',   label:'Voluntariado',     icon:'favorite' },
    { location:'/contact',        label:'Contacto',          icon:'email' },
    // { location:'/about',         label:'About',             icon:'info' },
  ];

  windowWidth: number = window.innerWidth;

  // initial values, the window object may still be undefined during this hook
  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  // if screen size changes it'll update
  @HostListener('window:resize', ['$event'])
  resize(event) {
    this.windowWidth = window.innerWidth;
  }

  constructor(
    private cvItemService: CvItemService,
  ) { }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  ngOnInit() {
    this.getItems();
  }

}
