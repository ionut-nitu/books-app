import { Injectable } from '@angular/core';
import { TGridModule } from '../../t-grid/t-grid.module';
import { Filter, FilterObserver, FilterTypes, GridFilter, SortType } from '../../interfaces/filter.interface';
import { BehaviorSubject } from 'rxjs';
export const filterInitialState: GridFilter = {
    [FilterTypes.SORT]: {
      field:null,
      type: SortType.ASC
    },
    [FilterTypes.PAGINATION]: {
      page:0,
      pageSize:0,
    },
    [FilterTypes.SEARCH]: {
      field: null,
      value: ''
    }
}
@Injectable({
  providedIn: TGridModule
})
export class FilterService {
  observers: FilterObserver[] = []
  filterState$ = new BehaviorSubject<GridFilter>(filterInitialState)
  constructor() { }
  changeFilter(newFilter: {type: FilterTypes, value: Filter }) {
    this.filterState$.next({
      ...this.filterState$.getValue(),
      [newFilter.type]: newFilter.value
    })
  }
  changePage(direction: number) {
    const paginationState = this.filterState$.getValue()[FilterTypes.PAGINATION]
    if(paginationState.page === 0 && direction === -1) {
      return
    }
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
        pageSize,
        page:0
      }
    })
  }
  changeSearch({field, value}:{field:string, value:string}) {
     this.filterState$.next({
      ...this.filterState$.getValue(),
      [FilterTypes.SEARCH]: {
        field,
        value
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

