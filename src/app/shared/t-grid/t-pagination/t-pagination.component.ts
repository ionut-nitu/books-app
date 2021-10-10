import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilterTypes } from '../../interfaces/filter.interface';
import { FilterService } from '../../services/filter-service/filter.service';

@Component({
  selector: 't-pagination',
  templateUrl: './t-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./t-pagination.component.scss']
})
export class TPaginationComponent implements OnInit {
  page:number;
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.getFilters().subscribe((filters) => this.page = filters[FilterTypes.PAGINATION].page)
  }
  changePage(direction: number) {
     this.filterService.changePage(direction)
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
