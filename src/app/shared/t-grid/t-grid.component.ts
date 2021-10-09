import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GridFilter } from '../interfaces/filter';
import { FilterObserver, FilterService } from '../services/filter-service/filter.service';
@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss'],
  providers:[]
})
export class TGridComponent<T> implements OnInit {
  columns = [
    'title',
    'longDescription'
  ]
  @Output() itemSelected = new EventEmitter<T>();
  @Output() filtersChange = new EventEmitter<GridFilter>();
  @Input() data: any;
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
  }
  
  ngOnInit(): void {

  }
  selectItem(item: any) {
    this.itemSelected.emit(item);
  }
  ngOnDestroy(): void {
    this.filter.removeObserver(this.observer)
  }

}
