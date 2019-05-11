import { Component, OnInit } from '@angular/core';

import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';

@Component({
  selector: 'app-cv-download-card',
  templateUrl: './cv-download-card.component.html',
  styleUrls: ['./cv-download-card.component.css']
})
export class CvDownloadCardComponent implements OnInit {
  featureToggles;

  constructor(
    private featureToggleService: FeatureToggleService,
  ) { }

  getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  ngOnInit() {
    this.getFeatureToggles();
  }

}
