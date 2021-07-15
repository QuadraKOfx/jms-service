import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../components/dialog/dialog.component';

export interface IClientProfile {
  id: string;
  name: string;
  address: string;
  telephone: number;
  model: string;
  chassis: number;
  actions: string[];
  service: IServiceProfile;
}

export interface IServiceProfile {
  date: string;
  mileage: string;
  repair: string;
  // repair: IRepairOrder;
}

// export enum IRepairOrder {
//   type_service = 'SERVICE',
//   type_oil = 'OIL',
//   type_other = 'OTHER'
// }

const ELEMENT_DATA: IClientProfile[] = [
  {
    id: '1',
    name: 'Marios',
    address: '37 Stasinou Street',
    telephone: 96658664,
    model: 'Honda',
    chassis: 73654783,
    service: {date: '11/12/2021', mileage: '50Mil', repair: null},
    actions: ['mode_edit', 'delete']
  },
  {
    id: '2',
    name: 'George',
    address: '6 Panagron Street',
    telephone: 96658664,
    model: 'KIA',
    chassis: 28347283,
    service: {date: '09/03/2021', mileage: '25Mil', repair: null},
    actions: ['mode_edit', 'delete']
  }
];

@Component({
  selector: 'app-clients',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersPageComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Address', 'Telephone', 'Model', 'Chassis', 'Actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<IClientProfile>();

  private subscriptions: Subscription;

  constructor(private router: Router,
              private dialog: MatDialog) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    console.info('USERS PAGE WORKING');
  }

  addNewClient(): void {
    console.info('Adding new client..');
  }

  removeClient(): void {
    console.info('Removing Client..');
  }

  clientDetails(row?: IClientProfile): void {
    this.dialog.open(DialogComponent);
  }

  editClient(event, element: IClientProfile): void {
    event.preventDefault();
    event.stopPropagation();
    console.info(element);
  }

  deleteClient(event, element: IClientProfile): void {
    event.preventDefault();
    event.stopPropagation();
    console.info(element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
