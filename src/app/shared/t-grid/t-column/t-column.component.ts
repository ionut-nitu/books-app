import {  Component, Input,OnInit } from '@angular/core';
import { FilterTypes, SortType } from '../../services/filter-service/filter';
import { FilterService } from '../../services/filter-service/filter.service';

@Component({
  selector: 't-column',
  templateUrl: './t-column.component.html',
  styleUrls: ['./t-column.component.scss']
})
export class TColumnComponent implements OnInit {
  @Input() name: string = '';
  @Input() property: string = '';
  @Input() sortable: boolean = false;
  sortType = null;
  currentFilter:FilterService;
  constructor(private filter: FilterService) {
    this.currentFilter = filter
   }
    ngOnInit(): void {
  }

  getIsSorted() {
    return this.currentFilter.getSortFilter().field === this.name
  }
  getSortValue() {
    if(this.getIsSorted()) {
      return this.currentFilter.getSortFilter().type
    }
    return null
    
  }
   changeFilter() {
     this.currentFilter.changeFilter({
       type: FilterTypes.SORT,
       value: {
         field: this.name,
         type: this.getSortValue() === SortType.ASC ? SortType.DESC : SortType.ASC
       }
     })
   }


}