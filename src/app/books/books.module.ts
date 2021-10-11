import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { TColumnComponent } from '../shared/t-grid/t-column/t-column.component';
import { TGridModule } from '../shared/t-grid/t-grid.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
    TGridModule
  ],
  exports: [
    BookDetailsComponent,
    BooksListComponent,
    BooksComponent
  ],
  declarations: [
    BookDetailsComponent,
    BooksListComponent,
    BooksComponent
  ],
  providers: [
  ]
})
export class BooksModule { }