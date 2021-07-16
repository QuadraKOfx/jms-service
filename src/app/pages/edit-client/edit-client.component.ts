import {Component, OnInit} from '@angular/core';
import {IClientProfile} from '../users/users.component';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  state$: IClientProfile;

  constructor() {
  }

  ngOnInit() {
    console.info('Welcome to the Edit Page');
    this.state$ = history.state.data;
    console.info(this.state$);
  }

}
