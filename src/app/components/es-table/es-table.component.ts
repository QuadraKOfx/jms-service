import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-es-table',
  templateUrl: './es-table.component.html',
  styleUrls: ['./es-table.component.scss']
})
export class EsTableComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: any[];
  @Input() clickedRows: Set<any>;
  @Input() invert?: boolean;

  formattedSource: any[];
  formattedColumns: string[];
  displayTable: any;
  showTable: boolean;

  firstAttribute: string = null;
  invertedAttribute: string = null;

  ngOnInit() {
    this.initTableActions();
  }

  private initTableActions(): void {
    this.clickedRows = new Set<any>();
    if (this.invert) {
      this.invertTable();
    } else {
      this.invertedAttribute = null;
      this.prepareTable(this.dataSource);
    }
    this.showTable = true;
  }

  private invertTable(): void {
    this.nestedObjects(this.dataSource);
    if (this.invertedAttribute) {
      this.formattedColumns = [this.firstAttribute].concat(this.dataSource.map(x => x[this.invertedAttribute]));
      // tslint:disable-next-line:max-line-length
      this.formattedSource = this.displayedColumns.map(x => this.formatInputRow(x, this.firstAttribute, this.dataSource[0][this.invertedAttribute]));
    } else {
      this.formattedSource = this.displayedColumns.map(x => this.formatInputRow(x, this.firstAttribute, this.dataSource[0]));
      this.formattedColumns = [this.firstAttribute].concat(this.dataSource.map(x => x[this.firstAttribute]));
    }
    this.prepareInvertedTable(this.formattedSource);

  }

  private prepareTable(data: any[]): void {
    this.displayTable = new MatTableDataSource(data);
  }

  private prepareInvertedTable(data: any[]): void {
    this.formattedColumns = Object.keys(data[0]);
    this.formattedSource.shift();
    this.displayTable = new MatTableDataSource(data);
  }

  private formatInputRow(row: string, firstChar: string, obj: any) {
    const output = {};
    output[firstChar] = row;
    if (this.displayedColumns.includes(row)) {
      if (this.invertedAttribute) {
        output[obj[firstChar]] = obj[row];
      } else {
        output[obj[firstChar]] = obj[row];
      }
    }
    return output;
  }

  private nestedObjects(data: any[]) {
    this.recursiveLoop(data[0], null);
  }

  private recursiveLoop(obj, current) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && current === null) {
        const value = obj[key];
        if (value !== undefined) {
          if (value && typeof value === 'object') {
            this.checkFirstAttribute(obj[key], key);
            this.recursiveLoop(obj[key], key);
          } else {
            this.checkFirstAttribute(obj, key);
          }
        }
      }
    }
  }

  private checkFirstAttribute(obj: any, key: any) {
    if (!this.firstAttribute) {
      if (this.displayedColumns.includes(key)) {
        this.invertedAttribute = null;
        this.firstAttribute = this.getFirstAttribute(obj, this.displayedColumns);
      } else {
        if (key === 'carInfo') {
          this.invertedAttribute = key;
          this.firstAttribute = this.getFirstAttribute(obj, this.displayedColumns);
        }
      }
    }
  }

  // TODO CREATE INVERTED / NORMAL TABLE INTERFACES
  private getFirstAttribute(data: any, columns: string[]): string {
    const keys = Object.keys(data);
    const filteredKeys = [];
    keys.forEach(key => {
      if (columns.includes(key)) {
        filteredKeys.push(key);
      }
    });
    return filteredKeys[0];
  }

}
