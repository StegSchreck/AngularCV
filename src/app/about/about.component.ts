import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  l10n;

  constructor(
    private localizationService: LocalizationService,
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  ngOnInit() {
    this.getLocalization();
  }

}
