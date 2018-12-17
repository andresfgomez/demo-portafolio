import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPage, Team } from '../interfaces/DataPage';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  data: DataPage = {};
  team: Team[] = [];
  loaded = false;

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe((r: DataPage) => {
        this.data = r;
        this.loaded = true;
      });
  }

  private loadTeam() {
    this.http.get('https://angular-portafolio-45671.firebaseio.com/equipo.json')
      .subscribe((r: Team[]) => {
        this.team = r;
      });
  }

}
