import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Column, ColumnObserver } from '../interfaces/column.interface';
import { FilterObserver, GridFilter } from '../interfaces/filter.interface';
import { ColumnService } from '../services/column-service/column.service';
import { FilterService } from '../services/filter-service/filter.service';
@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss'],
  providers:[]
})
export class TGridComponent implements OnInit {
  columns:Column[] = [];
  @Output() itemSelected = new EventEmitter<any>();
  @Output() filtersChange = new EventEmitter<GridFilter>();
  @Input() data: any;
  filterObserver:FilterObserver;
  columnObserver: ColumnObserver;
  constructor(private filterService: FilterService, private columnService: ColumnService) {
    const filterObserver = {
      id: filterService.getObserversCount(),
      notify: () => {setTimeout(() => this.filtersChange.emit(filterService.getAllFilters()))}
    }
    this.filterObserver = filterObserver
    filterService.addObserver(filterObserver)
    this.columns = columnService.getColumns()
  }
  ngAfterViewInit() {
  }
  
  ngOnInit(): void {
    this.filtersChange.emit(this.filterService.getAllFilters())
  }
  selectItem(item: any) {
    this.itemSelected.emit(item);
  }
  ngOnDestroy(): void {
    this.filterService.removeObserver(this.filterObserver)
  }

}
