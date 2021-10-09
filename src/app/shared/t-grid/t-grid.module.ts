import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TColumnComponent } from './t-column/t-column.component';
import { THeaderComponent } from './t-header/t-header.component';
import { TPaginationComponent } from './t-pagination/t-pagination.component';
import { TProgressComponent } from './t-progress/t-progress.component';
import { TRowComponent } from './t-row/t-row.component';
import { TGridComponent } from './t-grid.component';
import { FilterService } from '../services/filter-service/filter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    TGridComponent,
    TPaginationComponent,
    TProgressComponent,
    TColumnComponent,
    TRowComponent,
    THeaderComponent
  ],
  declarations: [
    TGridComponent,
    TPaginationComponent,
    TProgressComponent,
    TColumnComponent,
    TRowComponent,
    THeaderComponent
  ],
  providers: []
})
export class TGridModule { }