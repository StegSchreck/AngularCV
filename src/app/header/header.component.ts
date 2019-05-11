import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  featureToggles;
  generalData;
  navLinks = [];

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
    private featureToggleService: FeatureToggleService,
    private cvItemService: CvItemService,
  ) { }

  getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  populateNavLinks(): void {
    this.navLinks.push({ location: '/overview',       label: 'Overview',         icon: 'account_circle' });
    this.navLinks.push({ location: '/experience',     label: 'Experience',       icon: 'work' });
    this.navLinks.push({ location: '/education',      label: 'Education',        icon: 'school' });
    if (this.featureToggles.tab_publications === true) {
      this.navLinks.push({ location: '/publications',   label: 'Publications',     icon: 'record_voice_over' });
    }
    if (this.featureToggles.tab_projects === true) {
      this.navLinks.push({ location: '/projects',       label: 'Projects',         icon: 'assignment' });
    }
    if (this.featureToggles.tab_volunteering === true) {
      this.navLinks.push({ location: '/volunteering',   label: 'Volunteering',     icon: 'favorite' });
    }
    this.navLinks.push({ location: '/contact',        label: 'Contact',          icon: 'email' });
    // { location:'/about',         label:'About',             icon:'info' },
  }

  ngOnInit() {
    this.getFeatureToggles();
    this.getItems();
    this.populateNavLinks();
  }

}
