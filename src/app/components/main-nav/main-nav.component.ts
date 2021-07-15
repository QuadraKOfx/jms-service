import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
    console.info('SIDEBAR WORKING');
  }

  navigateTo(page: string): void {
    this.router.navigateByUrl(page).catch();
  }

}
