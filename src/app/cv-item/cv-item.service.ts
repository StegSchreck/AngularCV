import { Injectable } from '@angular/core';

import { CvItem } from './cv-item';
import { DATA } from './data/cv-items.data';

@Injectable()
export class CvItemService {

  constructor(
  ) { }

  getGeneralData() {
    return DATA.EN.GENERAL;
  }

  getCvItems(): Promise<CvItem[]> {
    return Promise.resolve(DATA.EN.CVITEMS);
  }

  getEducationItems(): Promise<CvItem[]> {
    return Promise.resolve(DATA.EN.EDUCATION);
  }

  getCertificationItems(): Promise<CvItem[]> {
    return Promise.resolve(DATA.EN.CERTIFICATES);
  }

  getProjectItems(): Promise<CvItem[]> {
    return Promise.resolve(DATA.EN.PROJECTS);
  }

  getVolunteerItems(): Promise<CvItem[]> {
    return Promise.resolve(DATA.EN.VOLUNTEERING);
  }

  getLanguageItems() {
    return Promise.resolve(DATA.EN.LANGUAGES);
  }

  getContactItems() {
    return Promise.resolve(DATA.EN.CONTACT);
  }

  getInterestItems() {
    return Promise.resolve(DATA.EN.INTERESTS);
  }

  getPublicationItems(): Promise<CvItem[]>  {
    return Promise.resolve(DATA.EN.PUBLICATIONS);
  }

  getTalkItems(): Promise<CvItem[]>  {
    return Promise.resolve(DATA.EN.TALKS);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
