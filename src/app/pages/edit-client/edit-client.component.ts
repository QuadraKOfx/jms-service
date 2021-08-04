import {Component, OnInit} from '@angular/core';
import {ClientProfile, IClientProfile} from '../../../assets/models/client';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {FirebaseCrudService} from '../../services/firebase-crud.service';
import {getAppState, IAppState} from '../../state-manager/users/app.selectors';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  state$: IClientProfile;
  appState: IAppState;
  clientForm: FormGroup;

  private subscriptions: Subscription;

  constructor(private formBuilder: FormBuilder,
              private store: Store,
              private router: Router,
              private crudService: FirebaseCrudService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    console.info('Welcome to the Edit Page');
    this.state$ = history.state.data;
    this.dispatchStoreSubscriptions();
    this.checkAppState();
    this.prepareReactiveForms();
  }

  onSubmit(event: Event, data): void {
    event.preventDefault();
    event.stopPropagation();
    this.crudService.updateUser(data, this.state$.$key).then(response => {
      this.router.navigateByUrl('/clients').catch();
    });
  }

  private prepareReactiveForms(): void {
    if (this.state$) {
      this.clientForm = this.formBuilder.group({
        name: [this.state$.name, Validators.required],
        address: [this.state$.address],
        telephone: [this.state$.telephone, Validators.required],
        lastName: [this.state$.lastName],
        carIds: [this.state$.carIds],
      });
    }
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
