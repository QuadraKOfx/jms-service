import {Component, OnInit} from '@angular/core';
import {IClientProfile} from '../assets/models/client';
import {getAppState, IAppState} from './state-manager/users/app.selectors';
import {app_setUsers} from './state-manager/users/app.actions';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FirebaseCrudService} from './services/firebase-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JMSAdmin';
  protected subscriptions: Subscription;

  clientData: IClientProfile[] = [];
  appState: IAppState;

  constructor(private router: Router,
              private store: Store,
              private crudService: FirebaseCrudService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.dispatchSubscriptions();
  }

  private dispatchSubscriptions() {
    this.subscriptions.add(
      this.crudService.getUsersList().snapshotChanges().subscribe(users => {
        this.clientData = [];
        users.forEach(item => {
          const a = item.payload.toJSON();
          a['$key'] = item.key;
          this.clientData.push(a as IClientProfile);
        });

        setTimeout(() => {
          this.dispatchStoreSubscriptions();
          this.setUsersState();
        }, 100);
      })
    );
  }

  private dispatchStoreSubscriptions() {
    this.subscriptions.add(this.store.select(getAppState).subscribe(state => (this.appState = state)));
  }

  private setUsersState() {
    this.store.dispatch(app_setUsers({users: this.clientData}));
  }
}
