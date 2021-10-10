import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Column, ColumnObserver } from '../../interfaces/column.interface';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  columns$ = new BehaviorSubject([])

  constructor() { }
  addColumn(column:Column) {
    this.columns$.next([
      ...this.columns$.getValue(),
      column
    ])
  }
  getColumns() {
    return this.columns$
  }
  removeColumn(column:Column) {
    const index = this.columns$.getValue().indexOf(column)
    const newColumns = this.columns$.getValue().splice(index,1)
    this.columns$.next([
      ...newColumns
    ])
  }
 
  
}
