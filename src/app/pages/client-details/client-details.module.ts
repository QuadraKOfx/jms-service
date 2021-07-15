import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDetailsComponent} from './client-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientDetailsComponent,
      },
    ]),
  ],
  declarations: [ClientDetailsComponent]
})
export class ClientDetailsModule {}
