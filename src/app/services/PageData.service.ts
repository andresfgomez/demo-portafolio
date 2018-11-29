import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPage } from '../interfaces/DataPage';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  data: DataPage = {};
  loaded = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/data-page.json')
      .subscribe((r: DataPage) => {
        this.data = r;
        this.loaded = true;
      });
  }
}
