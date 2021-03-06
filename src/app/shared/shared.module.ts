import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MainNavComponent} from '../components/main-nav/main-nav.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CardDialogModule} from '../components/card-dialog/card-dialog.module';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    CardDialogModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    RouterModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  exports: [MainNavComponent]
})
export class SharedModule {
}
