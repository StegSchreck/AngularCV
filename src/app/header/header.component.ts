import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CvItemService } from '../cv-item/cv-item.service';
import { LocalizationService } from '../l10n/l10n.service';
import { MaterialModule } from '../material/material.module';
import { PrintComponent } from '../print/print.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule, MaterialModule, PrintComponent]
})
export class HeaderComponent implements OnInit {
  public l10n;
  public generalData;
  public windowWidth;
  public navLinks;

  private cvItemService = inject(CvItemService);
  private localizationService = inject(LocalizationService);

  constructor() {
    this.localizationService.languageChanged.subscribe(data => {
      this.l10n = data;
      this.generalData = this.cvItemService.getGeneralData();
      this.setNavLinks();
    });
  }

  ngOnInit() {
    this.l10n = this.localizationService.getDefault();
    this.generalData = this.cvItemService.getGeneralData();
    this.windowWidth = window.innerWidth;
    this.setNavLinks();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  private setNavLinks() {
    this.navLinks = [
      { label: this.l10n.header.menu_overview, location: 'overview', icon: 'person' },
      { label: this.l10n.header.menu_experience, location: 'experience', icon: 'history' },
      { label: this.l10n.header.menu_education, location: 'education', icon: 'school' },
      { label: this.l10n.header.menu_projects, location: 'projects', icon: 'developer_board' },
      { label: this.l10n.header.menu_publications, location: 'publications', icon: 'chrome_reader_mode' },
      { label: this.l10n.header.menu_volunteering, location: 'volunteering', icon: 'favorite' },
      { label: this.l10n.header.menu_contact, location: 'contact', icon: 'contact_mail' },
    ];
  }

}
