import {Component, Input, OnInit} from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from './cv-item';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})

export class CvItemComponent implements OnInit {
  l10n;
  @Input() cvItem: CvItem;

  constructor(
    private localizationService: LocalizationService,
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  ngOnInit(): void {
    this.getLocalization();
  }

  toggleDetails(event) {
    const card = event.target.closest('mat-card');
    if (card.classList.contains('opened')) {
      card.classList.add('closed');
      card.classList.remove('opened');
      // event.target.closest('.toggle-details md-icon').innerHTML = 'expand_more'
    } else {
      card.classList.add('opened');
      card.classList.remove('closed');
      // event.target.closest('.toggle-details md-icon').innerHTML = 'expand_less'
    }
  }

}
