import { Component, OnInit, Output, EventEmitter, ViewChildren, Input } from '@angular/core';
import { GridFilter } from '../services/filter-service/filter';
import { FilterObserver, FilterService } from '../services/filter-service/filter.service';
import { TColumnComponent } from './t-column/t-column.component';
type GridData = {

}
@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss'],
  providers:[]
})
export class TGridComponent implements OnInit {
  @ViewChildren(TColumnComponent) columns!: TColumnComponent;
  @Output() filtersChange = new EventEmitter<GridFilter>();
  @Input() data: any[] = [];
  observer:FilterObserver;
  constructor(private filter: FilterService) {
    const notify = () => {setTimeout(() => this.filtersChange.emit(filter.getAllFilters()))}
    const observer = {
      id: filter.getObserversCount(),
      notify
    }
    this.observer = observer
    filter.addObserver(observer)
  }
  ngAfterViewInit() {
    console.log(this.columns)
  }
  
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.filter.removeObserver(this.observer)
  }

}
