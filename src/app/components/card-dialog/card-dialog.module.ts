import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardDialogComponent} from './card-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {EsTableModule} from '../es-table/es-table.module';

@NgModule({
  declarations: [CardDialogComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, EsTableModule],
  exports: [CardDialogComponent]
})
export class CardDialogModule {}
