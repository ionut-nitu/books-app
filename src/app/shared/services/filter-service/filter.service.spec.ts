import { TestBed } from '@angular/core/testing';
import { FilterTypes, SortType } from '../../interfaces/filter.interface';

import { filterInitialState, FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[FilterService]
    });
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have inital State', () => {
    expect(service.getFilters().getValue()).toEqual(filterInitialState)
  })
  it('should change page to 0'), () => {
    service.changePage(-1);
    expect(service.getFilters().getValue()[FilterTypes.PAGINATION]).toEqual({
      page:0,
      pageSize:0,
    })
  }
  it('should change page to 1'), () => {
    service.changePage(1);
    expect(service.getFilters().getValue()[FilterTypes.PAGINATION]).toEqual({
      page:1,
      pageSize:0,
    })
  }
  it('should change sort to title -> ASC', () => {
     const sort = {
       type: FilterTypes.SORT,
       value: {
         field: 'title',
         type:SortType.ASC
       }
     }
    service.changeFilter(sort)

    expect(service.getFilters().getValue()[FilterTypes.SORT]).toEqual({
      field:'title',
      type:SortType.ASC
    })
  })
  it('should change page size to 10', () => {
    service.changePageSize(10)
    expect(service.getFilters().getValue()[FilterTypes.PAGINATION].pageSize).toEqual(10)
  })
  it('should change search filter to field:title and  value:test', () => {
    service.changeSearch({
      field:'title',
      value:'test'
    })
     expect(service.getSearchFilter()).toEqual({
       field:'title',
       value:'test'
     })
  })
});
