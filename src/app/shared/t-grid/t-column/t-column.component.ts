import {  ChangeDetectionStrategy, Component, HostBinding, Input,OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterTypes, GridFilter, SortType } from '../../interfaces/filter.interface';
import { ColumnService } from '../../services/column-service/column.service';
import { FilterService } from '../../services/filter-service/filter.service';

@Component({
  selector: 't-column',
  templateUrl: './t-column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./t-column.component.scss']
})
export class TColumnComponent implements OnInit {
  @Input() name: string;
  @Input() property: string;
  @Input() sortable: boolean;
  @Input() flex: number = 1;
  @HostBinding('style.flex') flexHost = this.flex;
  isArrowUp = false;
  isSorted = new BehaviorSubject(false);
  constructor(private filterService: FilterService, private columnService:ColumnService) {
    filterService.getFilters().subscribe((filters:GridFilter) => {
      if(filters) {
        this.isSorted.next(filters[FilterTypes.SORT].field === this.property)
      }
    })
  }

  ngOnInit(): void {
    this.columnService.addColumn({
      name: this.name,
      property:this.property,
      sortable: this.sortable,
      flex: this.flex || 1
    })
    this.flexHost = this.flex;
  }
  getSortValue() {
    if(this.isSorted.getValue()) {
      return this.filterService.getSortFilter().type
    }
    return null
  }
   changeFilter() {
     this.filterService.changeFilter({
       type: FilterTypes.SORT,
       value: {
         field: this.property,
         type: this.getSortValue() === SortType.ASC ? SortType.DESC : SortType.ASC
       }
     })
     this.isArrowUp = this.getSortValue() === SortType.ASC
   }


}
