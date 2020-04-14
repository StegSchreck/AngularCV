import { Injectable } from '@angular/core';

import { CvItem } from './cv-item';
import { DATA } from './data/cv-items.data';
import { FeatureToggleService } from '../feature-toggle/feature-toggle.service';

@Injectable()
export class CvItemService {
  public featureToggles;

  constructor(
    private featureToggleService: FeatureToggleService,
  ) {
    this.getFeatureToggles();
  }

  private getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  getGeneralData() {
    return this.getDefault().GENERAL;
  }

  getCvItems(): Promise<CvItem[]> {
    return Promise.resolve(this.getDefault().CVITEMS);
  }

  getEducationItems(): Promise<CvItem[]> {
    return Promise.resolve(this.getDefault().EDUCATION);
  }

  getCertificationItems(): Promise<CvItem[]> {
    return Promise.resolve(this.getDefault().CERTIFICATES);
  }

  getProjectItems(): Promise<CvItem[]> {
    return Promise.resolve(this.getDefault().PROJECTS);
  }

  getVolunteerItems(): Promise<CvItem[]> {
    return Promise.resolve(this.getDefault().VOLUNTEERING);
  }

  getLanguageItems() {
    return Promise.resolve(this.getDefault().LANGUAGES);
  }

  getContactItems() {
    return Promise.resolve(this.getDefault().CONTACT);
  }

  getInterestItems() {
    return Promise.resolve(this.getDefault().INTERESTS);
  }

  getPublicationItems(): Promise<CvItem[]>  {
    return Promise.resolve(this.getDefault().PUBLICATIONS);
  }

  getTalkItems(): Promise<CvItem[]>  {
    return Promise.resolve(this.getDefault().TALKS);
  }

  public getDefault() {
    let language = this.featureToggles.default_language;
    try {
      const stored_language = JSON.parse(localStorage.getItem('l10n')).language;
      if (DATA.hasOwnProperty(stored_language)) {
        language = stored_language;
      }
    } catch (err) { }
    return DATA[language];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
