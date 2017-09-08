import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CvItem } from "./cv-item";
import { CVITEMS, CERTIFICATES, EDUCATION, PROJECTS, VOLUNTEERING, LANGUAGES, CONTACT } from './cv-items.data';

@Injectable()
export class CvItemService {
  private cvItemsUrl = 'api/cvitems';  // URL to web api

  constructor(private http: Http) { }

  getCvItems(): Promise<CvItem[]> {
    return Promise.resolve(CVITEMS);
  }

  getEducationItems(): Promise<CvItem[]> {
    return Promise.resolve(EDUCATION);
  }

  getCertificationItems(): Promise<CvItem[]> {
    return Promise.resolve(CERTIFICATES);
  }

  getProjectItems(): Promise<CvItem[]> {
    return Promise.resolve(PROJECTS);
  }

  getVolunteerItems(): Promise<CvItem[]> {
    return Promise.resolve(VOLUNTEERING);
  }

  getLanguageItems() {
    return Promise.resolve(LANGUAGES);
  }

  getContactItems() {
    return Promise.resolve(CONTACT);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
