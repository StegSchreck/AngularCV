import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CvItem } from "./cv-item";
import {CVITEMS, EDUCATION} from './cv-items.mock';

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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCvItem(id: number): Promise<CvItem> {
    const url = `${this.cvItemsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as CvItem)
      .catch(this.handleError);
  }
}
