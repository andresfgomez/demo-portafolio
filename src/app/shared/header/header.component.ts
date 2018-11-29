import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/PageData.service';
import { DataPage } from '../../interfaces/DataPage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public pageDataService: PageDataService) {
  }

  ngOnInit() {
  }

}
