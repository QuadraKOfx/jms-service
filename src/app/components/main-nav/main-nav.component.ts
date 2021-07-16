import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(protected router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    console.info('SIDEBAR WORKING');
  }

  navigateTo(page: string): void {
    this.router.navigateByUrl(page).catch();
  }

  signOut(event) {
    event.preventDefault();
    event.stopPropagation();
    this.authService.logOut().then(() => {
      this.router.navigateByUrl('/login').catch();
    });
  }

}
