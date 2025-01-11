import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

import { CvItemDirective } from './cv-item.directive';
import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from './cv-item';
import {FeatureToggleService} from '../feature-toggle/feature-toggle.service';

@Component({
    selector: 'app-cv-item',
    templateUrl: './cv-item.component.html',
    styleUrls: ['./cv-item.component.css'],
    standalone: false
})

export class CvItemComponent implements OnInit, AfterViewInit {
  public l10n;
  public featureToggles;
  @Input() public cvItem: CvItem;
  @ViewChild(CvItemDirective) public cvThumbnail: CvItemDirective;

  constructor(
    private localizationService: LocalizationService,
    private featureToggleService: FeatureToggleService,
  ) {
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  ngOnInit(): void {
    this.getLocalization();
    this.getFeatureToggles();
  }

  ngAfterViewInit() {
    this.calculateCvItemHeight();
  }

  private setComponentMinHeight(height) {
    if (this.cvThumbnail) {
      this.cvThumbnail.elementRef.nativeElement.style.minHeight = `${height}px`;
    }
  }

  private calculateCvItemHeight(): void {
    if (this.cvItem !== undefined && this.cvItem.thumbnail !== undefined && this.cvItem.thumbnail !== '') {
      const img = new Image();
      img.onload = () => {
        const thumbnailHeight = img.height;
        const thumbnailWidth = img.width;
        const ratio = Number(((thumbnailHeight.valueOf() / thumbnailWidth.valueOf()) * 100).toFixed(0));
        const excess = Math.max(ratio - 84, 0);
        this.setComponentMinHeight(100 + excess);
      };
      img.src = '../../assets/img/item-thumbnails/' + this.cvItem.thumbnail;
    }
  }

  private toggleDetails(event): void {
    const card = event.target.closest('mat-card');
    if (card.classList.contains('opened')) {
      card.classList.add('closed');
      card.classList.remove('opened');
    } else {
      card.classList.add('opened');
      card.classList.remove('closed');
    }
  }

}
