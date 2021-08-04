import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {getAppState, IAppState} from '../../state-manager/users/app.selectors';
import {IClientProfile} from '../../../assets/models/client';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  protected subscriptions: Subscription;

  appState: IAppState;
  customer$: string;
  customerDetails$: IClientProfile = null;

  constructor(private store: Store,
              private actRoute: ActivatedRoute,
              private router: Router) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.dispatchSubscriptions();
    this.dispatchStoreState();
  }

  addNewCar(event) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigateByUrl('/client/'.concat(this.customer$) + '/new-vehicle').catch();
  }

  private dispatchStoreState() {
    this.subscriptions.add(this.store.select(getAppState).subscribe(state => {
      if (state.users) {
        this.appState = state;
        this.customerDetails$ = this.getCustomer(this.customer$)[0];
        console.info(this.customerDetails$);
      }
    }));
  }

  private dispatchSubscriptions() {
    this.subscriptions.add(this.actRoute.paramMap.subscribe(res => {
      this.customer$ = res.get('id');
    }));
  }

  private getCustomer(id: string): IClientProfile[] {
    return this.appState.users.filter(user => user.id === id);
  }


}
