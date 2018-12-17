import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/PageData.service';
import { DataPage } from '../../interfaces/DataPage';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public pageDataService: PageDataService, private router: Router) {
  }

  ngOnInit() {
  }

  public buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
