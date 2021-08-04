import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDetailsComponent} from './client-details.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientDetailsComponent,
      },
    ]),
    MatButtonModule,
  ],
  declarations: [ClientDetailsComponent]
})
export class ClientDetailsModule {}
