import { Injectable } from '@angular/core';
import { Column, ColumnObserver } from '../../interfaces/column.interface';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  columns: Column[] = []

  constructor() { }
  addColumn(column:Column) {
    this.columns.push(column)
  }
  removeColumn(column:Column) {
    const index = this.columns.indexOf(column)
    this.columns.splice(index,1)
  }
  getColumns() {
    return this.columns
  }
  
}
