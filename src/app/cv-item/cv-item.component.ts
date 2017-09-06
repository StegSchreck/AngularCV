import 'rxjs/add/operator/switchMap';
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

}
