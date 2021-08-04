import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EsTableComponent} from './es-table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatIconModule, MatTableModule, MatInputModule],
  exports: [
    EsTableComponent
  ],
  declarations: [EsTableComponent]
})
export class EsTableModule {}
