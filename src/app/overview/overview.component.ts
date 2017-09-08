import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title = "Overview";
  interests = [
    { title:'Rowing',           subtitle:'2000 — 2013',         icon:'rowing' },
    { title:'Photography',      subtitle:'Pentax K3 DSLR',      icon:'camera_alt' },
    { title:'Volunteering in sports',       subtitle:'2005 — 2016',         icon:'favorite' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
