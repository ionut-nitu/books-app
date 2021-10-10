import { Injectable } from '@angular/core';
import { TGridModule } from '../../t-grid/t-grid.module';
import { Filter, FilterObserver, FilterTypes, GridFilter, SortType } from '../../interfaces/filter.interface';
import { BehaviorSubject } from 'rxjs';
const initialState: GridFilter = {
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
@Injectable({
  providedIn: TGridModule
})
export class FilterService {
  observers: FilterObserver[] = []
  filterState$ = new BehaviorSubject<GridFilter>(initialState)
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
    this.filterState$.next({
      ...this.filterState$.getValue(),
      [newFilter.type]: newFilter.value
    })
  }
  setTotalPages(totalPages:number) {
    this.filterState$.next({
        ...this.filterState$.getValue(),
        [FilterTypes.PAGINATION]: {
          ...this.filterState$.getValue()[FilterTypes.PAGINATION],
          totalPages
        }
    })
  }
  changePage(direction: number) {
    const paginationState = this.filterState$.getValue()[FilterTypes.PAGINATION]
    console.log(paginationState, "test")
    if(paginationState.page === 0 && direction === -1) {
      return
    }
    // if(paginationState.totalPages === paginationState.page && direction === 1) {
    //   return
    // }
    this.filterState$.next({
      ...this.filterState$.getValue(),
      [FilterTypes.PAGINATION]: {
        ...paginationState,
        page: paginationState.page + direction
      }
    })
}
  changePageSize(pageSize: number) {
    this.filterState$.next({
      ...this.filterState$.getValue(),
      [FilterTypes.PAGINATION]: {
        ...this.filterState$.getValue()[FilterTypes.PAGINATION],
        pageSize
      }
    })
  }
  getCurrentPage() {
    return this.filterState$.getValue()[FilterTypes.PAGINATION].page
  }
  getSortFilter() {
    return this.filterState$.getValue()[FilterTypes.SORT]
  }

  getPaginationFilter() {
     return this.filterState$.getValue()[FilterTypes.PAGINATION]
  }
  getSearchFilter() {
    return this.filterState$.getValue()[FilterTypes.SEARCH]
  }
  getFilters() {
    return this.filterState$
  }
}

