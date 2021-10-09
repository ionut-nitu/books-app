import { Component, OnInit } from '@angular/core';
import { FilterTypes } from '../../interfaces/filter.interface';
import { FilterService } from '../../services/filter-service/filter.service';

@Component({
  selector: 't-pagination',
  templateUrl: './t-pagination.component.html',
  styleUrls: ['./t-pagination.component.scss']
})
export class TPaginationComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
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
  getCurrentPage() {
    return this.filterService.getCurrentPage()
  }
  changePageLimit(pageSize: number) {
    this.filterService.changePageSize(pageSize) 
  }
}
