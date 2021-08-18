import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {IClientProfile} from '../../../assets/models/client';
import {FirebaseCrudService} from '../../services/firebase-crud.service';
import {Store} from '@ngrx/store';
import {getAppState, IAppState} from '../../state-manager/users/app.selectors';
import {CardDialogComponent} from '../../components/card-dialog/card-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersPageComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Address', 'Telephone', 'LastName', 'Actions'];
  dataSource: MatTableDataSource<IClientProfile>;
  clientData: IClientProfile[] = [];
  clickedRows = new Set<IClientProfile>();

  appState: IAppState;
  browserRefresh: boolean;

  private subscriptions: Subscription;

  constructor(private router: Router,
              private crudService: FirebaseCrudService,
              private store: Store,
              private dialog: MatDialog) {
    this.subscriptions = new Subscription();
    // this.dialog.open(CardDialogComponent);
  }

  ngOnInit() {
    this.dispatchSubscriptions();
  }

  addNewClient(): void {
    this.router.navigate(['/client/add']).catch();
  }

  removeClient(): void {
    console.info('Removing Client..');
  }

  clientDetails(row?: IClientProfile): void {
    console.info(row);
    this.dialog.open(CardDialogComponent, {
      data: {
        client: row
      }
    });
  }

  editClient(event, element: IClientProfile): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/client/edit/'.concat(element.id)], {state: {data: element}}).catch();
  }

  deleteClient(event, element: IClientProfile): void {
    event.preventDefault();
    event.stopPropagation();
    this.crudService.deleteClient(element).then((response) => {
      console.info(response);
    });
  }

  addCustomerCar(event, element: IClientProfile): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigateByUrl('/client/details/'.concat(element.id), {state: {data: element}}).catch();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // private dispatchSubscriptions() {
  //   this.subscriptions.add(
  //     this.crudService.getUsersList().snapshotChanges().subscribe(users => {
  //
  //
  //       setTimeout(() => {
  //         this.dispatchStoreSubscriptions();
  //         this.setUsersState();
  //       }, 100);
  //     })
  //   );
  // }

  private dispatchSubscriptions() {
    this.dispatchStoreSubscriptions();
  }

  private dispatchStoreSubscriptions() {
    this.subscriptions.add(this.store.select(getAppState).subscribe(state => {
      this.appState = state;
      console.info(this.appState);
      this.dataSource = new MatTableDataSource<IClientProfile>(this.appState.users);
    }));
  }

  // private setUsersState() {
  //   this.store.dispatch(app_setUsers({users: this.clientData}));
  // }

}
