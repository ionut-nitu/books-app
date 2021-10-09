import { Injectable } from '@angular/core';
import { TGridModule } from '../../t-grid/t-grid.module';
import { Filter, FilterTypes, GridFilter, SortType } from './filter';

@Injectable({
  providedIn: TGridModule
})
export class FilterService {
  observers: FilterObserver[] = []
  filterState: GridFilter = {
    [FilterTypes.SORT]: {
      field:null,
      type: SortType.ASC
    },
    [FilterTypes.PAGINATION]: {
      page:0,
      pageSize:10
    },
    [FilterTypes.SEARCH]: {
      field:null,
      value: null
    }
  }
  constructor() { }
  getObserversCount () {
    return this.observers.length
  }
  addObserver(observer: FilterObserver) {
    this.observers.push(observer)
  }
  removeObserver(observer: FilterObserver) {
    const toDelete = this.observers.find(item => item.id === observer.id)
    if(toDelete) {
      this.observers.splice(this.observers.indexOf(observer), 1)
    }
  }
  notifyObservers() {
    this.observers.forEach(observer => observer.notify())
  }
  changeFilter(newFilter: {type: FilterTypes, value: Filter }) {
    this.filterState = {
      ...this.filterState,
      [newFilter.type]: newFilter.value
    }
    this.notifyObservers()
  }
  getSortFilter() {
    return this.filterState[FilterTypes.SORT]
  }

  getPaginationFilter() {
     return this.filterState[FilterTypes.PAGINATION]
  }
  getSearchFilter() {
    return this.filterState[FilterTypes.SEARCH]
  }
  getAllFilters() {
    return this.filterState
  }
}
export type FilterObserver =  {
  id: number;
  notify: () => void;
}

