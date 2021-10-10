import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/interfaces/book.interface';
import { GridFilter } from 'src/app/shared/interfaces/filter.interface';
import { BooksService } from 'src/app/shared/services/books-service/books.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[];
  books$: Observable<Book[]>;
  selectedBook: Book;
  constructor(private booksService: BooksService) { }
  ngOnInit(): void {
    this.getBooks(null)
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  getBooks(filter:GridFilter) {
    this.books$ = this.booksService.getBooks(filter);
  }
  resetBook() {
      const emptyBook: Book = {
        id: null,
        title: '',
        longDescription: '',
        shortDescription: '',
        authors:[],
        status:'',
        thumbnailUrl:'',
        categories:[],
        pageCount:0,
        publishedDate: {
          $date: new Date()
        }
      };
      this.selectBook(emptyBook);
  }

}
