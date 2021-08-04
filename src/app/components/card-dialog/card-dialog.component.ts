import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import {IClientProfile} from '../../../assets/models/client';

@Component({
  selector: 'app-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {

  clientInfo = ['name', 'address', 'telephone'];
  carInfo = ['make', 'model', 'chassis', 'engine', 'date', 'plates'];
  serviceInfo = ['date', 'mileage', 'repair', 'work'];
  tableData: IClientProfile[];
  clickedRows: Set<IClientProfile>;

  subscriptions = new Subscription();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dispatchSubscriptions();
  }

  ngOnInit() {
    this.initActions();
  }

  private initActions(): void {
    this.tableData = [this.data.client];
  }

  private dispatchSubscriptions(): void {
    // todo subscriptions
  }
}
