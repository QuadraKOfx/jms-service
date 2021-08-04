import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseCrudService} from '../../services/firebase-crud.service';
import {ClientProfile, IClientProfile} from '../../../assets/models/client';
import {getAppState, IAppState} from '../../state-manager/users/app.selectors';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';

export interface IRepairType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  clientForm: FormGroup;
  repairType: IRepairType[] = [
    {value: 'service', viewValue: 'Service'},
    {value: 'oil-change', viewValue: 'Oil Change'},
    {value: 'other', viewValue: 'Other'}
  ];

  appState: IAppState;

  private subscriptions: Subscription;

  constructor(private formBuilder: FormBuilder,
              private store: Store,
              private router: Router,
              private crudService: FirebaseCrudService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.prepareReactiveForms();
    this.dispatchStoreSubscriptions();
    this.checkAppState();
  }

  selectRepairType(event: Event): void {
    this.clientForm.patchValue({
      clientInfo: {
        service: {
          repair: event
        }
      }
    });
  }

  onSubmit(event: Event, data: FormData): void {
    event.preventDefault();
    event.stopPropagation();
    const user = new ClientProfile(this.appState.users.length.toString(), data);
    this.crudService.submitUser(user);
  }

  private prepareReactiveForms(): void {
    this.clientForm = this.formBuilder.group({
      name: [null, Validators.required],
      address: [null],
      telephone: [null, Validators.required],
      lastName: [null],
      carIds: [],
    });
  }

  private dispatchStoreSubscriptions() {
    this.subscriptions.add(this.store.select(getAppState).subscribe(state => (this.appState = state)));
  }

  private checkAppState() {
    if (!this.appState.users) {
      this.router.navigateByUrl('/clients').catch();
    }
  }
}
