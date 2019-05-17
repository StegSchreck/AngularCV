import { Injectable } from '@angular/core';

import { CvItem } from './cv-item';
// tslint:disable-next-line:max-line-length
import { GENERAL, CVITEMS, CERTIFICATES, EDUCATION, PROJECTS, VOLUNTEERING, LANGUAGES, CONTACT, INTERESTS, PUBLICATIONS, TALKS } from './cv-items.data';

@Injectable()
export class CvItemService {

  constructor() { }

  getGeneralData() {
    return GENERAL;
  }

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

  getInterestItems() {
    return Promise.resolve(INTERESTS);
  }

  getPublicationItems(): Promise<CvItem[]>  {
    return Promise.resolve(PUBLICATIONS);
  }

  getTalkItems(): Promise<CvItem[]>  {
    return Promise.resolve(TALKS);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
