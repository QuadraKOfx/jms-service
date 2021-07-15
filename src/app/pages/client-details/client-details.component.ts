import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import {DialogComponent} from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './client-details.component.html',
})
export class ClientDetailsComponent implements OnInit {

  private subscriptions: Subscription;

  constructor(public dialog: MatDialog) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.checkIncomingPayload();
  }

  private initActions(): void {
    this.dialog.open(DialogComponent);
  }

  private checkIncomingPayload(): void {
    if (history.state.data) {
      this.initActions();
    }
  }

}
