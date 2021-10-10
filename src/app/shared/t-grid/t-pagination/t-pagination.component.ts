import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilterTypes, GridFilter } from '../../interfaces/filter.interface';
import { FilterService } from '../../services/filter-service/filter.service';

@Component({
  selector: 't-pagination',
  templateUrl: './t-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./t-pagination.component.scss']
})
export class TPaginationComponent implements OnInit {
  page:number;
  pageSize:number;
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.getFilters().subscribe((filters:GridFilter) => {
      const {page, pageSize} = filters[FilterTypes.PAGINATION]
      this.page = page
      this.pageSize = pageSize
    })
  }
  changePage(direction: number) {
     this.filterService.changePage(direction)
  }
  onPageSizeChange(e:any) {
    this.filterService.changePageSize(+e.target.value)
  }
  goToNextPage() {
    this.changePage(1)
  }
  goToPreviousPage() {
    this.changePage(-1)
  }
  changePageLimit(pageSize: number) {
    this.filterService.changePageSize(pageSize) 
  }
}
