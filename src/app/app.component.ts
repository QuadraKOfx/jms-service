import {Component, OnInit} from '@angular/core';
import {ICarProfile, IClientProfile} from '../assets/models/client';
import {getAppState, IAppState} from './state-manager/users/app.selectors';
import {app_setAdmin, app_setCars, app_setUsers} from './state-manager/users/app.actions';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FirebaseCrudService} from './services/firebase-crud.service';
import {IAdmin} from '../assets/models/admin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JMSAdmin';
  protected subscriptions: Subscription;

  clientData: IClientProfile[] = [];
  carsData: ICarProfile[] = [];
  admin: IAdmin;
  appState: IAppState;

  constructor(private router: Router,
              private store: Store,
              private crudService: FirebaseCrudService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.dispatchSubscriptions();
    this.dispatchStoreSubscriptions();
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
        this.setUsersState();
      })
    );

    this.subscriptions.add(
      this.crudService.getCarsList().snapshotChanges().subscribe(cars => {
        this.carsData = [];
        cars.forEach(item => {
          const a = item.payload.toJSON();
          a['$key'] = item.key;
          this.carsData.push(a as ICarProfile);
        });
        this.setCarsState();
      })
    );

    this.subscriptions.add(
      this.crudService.getAdmin().valueChanges().subscribe(admin => {
        this.admin = admin;
        this.setAdminState();
      })
    );
  }

  private dispatchStoreSubscriptions() {
    this.subscriptions.add(this.store.select(getAppState).subscribe(state => (this.appState = state)));
  }

  private setUsersState() {
    this.store.dispatch(app_setUsers({users: this.clientData}));
  }

  private setAdminState() {
    this.store.dispatch(app_setAdmin({admin: this.admin}));
  }

  private setCarsState() {
    this.store.dispatch(app_setCars({cars: this.carsData}));
  }
}
