import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.info('WELCOME TO DASHBOARD');
  }

  toClientsPage(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigateByUrl('clients').catch();
  }
}
