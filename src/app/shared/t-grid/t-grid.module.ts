import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TColumnComponent } from './t-column/t-column.component';
import { THeaderComponent } from './t-header/t-header.component';
import { TPaginationComponent } from './t-pagination/t-pagination.component';
import { TProgressComponent } from './t-progress/t-progress.component';
import { TRowComponent } from './t-row/t-row.component';
import { TGridComponent } from './t-grid.component';
import { TBodyComponent } from './t-body/t-body.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    TGridComponent,
    TPaginationComponent,
    TProgressComponent,
    TColumnComponent,
    TRowComponent,
    THeaderComponent,
    TBodyComponent
  ],
  declarations: [
    TGridComponent,
    TPaginationComponent,
    TProgressComponent,
    TColumnComponent,
    TRowComponent,
    THeaderComponent,
    TBodyComponent
  ],
  providers: []
})
export class TGridModule { }