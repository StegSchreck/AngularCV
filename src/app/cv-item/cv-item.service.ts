import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CvItem } from "./cv-item";

@Injectable()
export class CvItemService {
  private cvItemsUrl = 'api/cv-items';  // URL to web api

  constructor(private http: Http) { }

  getCvItems(): Promise<CvItem[]> {
    return this.http.get(this.cvItemsUrl)
      .toPromise()
      .then(response => response.json().data as CvItem[])
      .catch(this.handleError);
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
