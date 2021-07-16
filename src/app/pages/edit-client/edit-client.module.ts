import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EditClientComponent} from './edit-client.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditClientComponent,
      },
    ]),
  ],
  declarations: [EditClientComponent],
})
export class EditClientModule {}
