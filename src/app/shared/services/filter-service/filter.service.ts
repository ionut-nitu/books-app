import { Injectable } from '@angular/core';
import { TGridModule } from '../../t-grid/t-grid.module';
import { Filter, FilterObserver, FilterTypes, GridFilter, SortType } from '../../interfaces/filter.interface';

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
      pageSize:10,
      totalPages: 0
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
  setTotalPages(totalPages:number) {
    this.filterState = {
        ...this.filterState,
        [FilterTypes.PAGINATION]: {
          ...this.filterState[FilterTypes.PAGINATION],
          totalPages
        }
    } 
  }
  changePage(direction: number) {
    console.log("change page")
    const paginationState = this.filterState[FilterTypes.PAGINATION]
    console.log(paginationState, "test")
    if(paginationState.page === 0 && direction === -1) {
      return
    }
    // if(paginationState.totalPages === paginationState.page && direction === 1) {
    //   return
    // }
    this.filterState = {
      ...this.filterState,
      [FilterTypes.PAGINATION]: {
        ...paginationState,
        page: paginationState.page + direction
      }
    }
    console.log(this.filterState, "test")
  this.notifyObservers()
}
  changePageSize(pageSize: number) {
    this.filterState = {
      ...this.filterState,
      [FilterTypes.PAGINATION]: {
        ...this.filterState[FilterTypes.PAGINATION],
        pageSize
      }
    }
    this.notifyObservers()
  }
  getCurrentPage() {
    return this.filterState[FilterTypes.PAGINATION].page
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

