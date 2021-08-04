import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IClientProfile} from '../../../assets/models/client';
import {MatTableDataSource} from '@angular/material/table';
import {FirebaseCrudService} from '../../services/firebase-crud.service';
import {Subscription} from 'rxjs';
import {app_setUsers} from '../../state-manager/users/app.actions';
import {Store} from '@ngrx/store';
import {getAppState, IAppState} from '../../state-manager/users/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  protected subscriptions: Subscription;

  clientData: IClientProfile[] = [];
  appState: IAppState;

  constructor(private router: Router,
              private store: Store,
              private crudService: FirebaseCrudService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    console.info('WELCOME TO DASHBOARD');
    this.dispatchStoreSubscriptions();
  }

  toClientsPage(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigateByUrl('clients').catch();
  }

  private dispatchStoreSubscriptions() {
    this.subscriptions.add(this.store.select(getAppState).subscribe(state => (this.appState = state)));
  }
}
