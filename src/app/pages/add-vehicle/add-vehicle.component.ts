import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {getAppState, IAppState} from '../../state-manager/users/app.selectors';
import {IClientProfile} from '../../../assets/models/client';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IRepairType} from '../add-client/add-client.component';
import {FirebaseCrudService} from '../../services/firebase-crud.service';

@Component({
  selector: 'app-insert-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  protected subscriptions: Subscription;

  appState: IAppState;
  customer$: string;
  customerDetails$: IClientProfile;
  clientForm: FormGroup;
  disabled = true;

  repairType: IRepairType[] = [
    {value: 'service', viewValue: 'Service'},
    {value: 'oil-change', viewValue: 'Oil Change'},
    {value: 'other', viewValue: 'Other'}
  ];

  constructor(private store: Store,
              private formBuilder: FormBuilder,
              private crudService: FirebaseCrudService,
              private actRoute: ActivatedRoute,
              private router: Router) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.dispatchSubscriptions();
    this.prepareReactiveForms();
  }

  onSubmit(event: Event, data: any) {
    event.preventDefault();
    event.stopPropagation();
    this.crudService.addCar(data).then(() => {
      console.info('Done adding car');
    });
  }

  enableService(event) {
    this.disabled = !event.checked;
  }

  selectRepairType(event: Event): void {
    this.clientForm.patchValue({
      carInfo: {
        service: {
          repair: event
        }
      }
    });
  }

  private dispatchStoreState() {
    this.subscriptions.add(this.store.select(getAppState).subscribe(state => {
      if (state.users) {
        this.appState = state;
        this.customerDetails$ = this.getCustomer(this.customer$)[0];
      }
    }));
  }

  private dispatchSubscriptions() {
    this.subscriptions.add(this.actRoute.paramMap.subscribe(res => {
      this.customer$ = res.get('id');
      this.dispatchStoreState();
    }));
  }

  private getCustomer(id: string): IClientProfile[] {
    return this.appState.users.filter(user => user.id === id);
  }

  private prepareReactiveForms(): void {
    this.clientForm = this.formBuilder.group({
      carInfo: this.formBuilder.group({
        make: [null],
        model: [null],
        chassis: [null],
        engine: [null],
        date: [null],
        plates: [null],
        ignitionKey: [null],
        service: this.formBuilder.group({
          date: [null],
          mileage: [null],
          repair: [null],
          work: [null]
        })
      })
    });
  }

}
