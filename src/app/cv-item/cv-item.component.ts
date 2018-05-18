
import { Component, Input } from '@angular/core';

import { CvItem }           from './cv-item';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})

export class CvItemComponent {
  @Input() cvItem: CvItem;

  constructor() { }

  ngOnInit(): void { }

  toggleDetails(event) {
    let card = event.target.closest('mat-card');
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
