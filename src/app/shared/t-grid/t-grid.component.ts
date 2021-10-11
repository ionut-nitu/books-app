import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Column, ColumnObserver } from '../interfaces/column.interface';
import {  GridFilter } from '../interfaces/filter.interface';
import { ColumnService } from '../services/column-service/column.service';
import { FilterService } from '../services/filter-service/filter.service';
@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[]
})
export class TGridComponent implements OnInit {
  columns:Column[] = [];
  @Output() itemSelected = new EventEmitter<any>();
  @Output() filtersChange = new EventEmitter<GridFilter>();
  @Input() data: Observable<any>;
  filters$;
  columns$;
  columnObserver: ColumnObserver;
  progress = 1;
  radius = 25;
  constructor(private filterService: FilterService, private columnService: ColumnService) {
    this.filters$ = filterService.getFilters()
    this.columns$ = this.columnService.getColumns()
    this.filters$.subscribe((value) => this.getData(value));
    this.columns$.subscribe((value) => this.columns = value)
  }
  ngAfterViewInit() {
  }
  getData(value: GridFilter) {
    this.filtersChange.emit(value)
  }
  ngOnInit(): void {
  }
  selectItem(item: any) {
    this.itemSelected.emit(item);
  }
  ngOnDestroy(): void {
    this.filters$.unsubscribe()
  }

}
