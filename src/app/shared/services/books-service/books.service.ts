import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { FilterTypes, GridFilter, SortType } from '../../interfaces/filter';
const BASE_URL = 'http://localhost:3000/books'
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
  convertFilterToUrl(filter:GridFilter): string {
    if(!filter) {
      return BASE_URL
    }
    const order = filter[FilterTypes.SORT].type === SortType.ASC ? 'asc' : 'desc'
    const sort = filter[FilterTypes.SORT].field
    const page = filter[FilterTypes.PAGINATION].page
    const limit = filter[FilterTypes.PAGINATION].pageSize
    return BASE_URL + `?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`
  }
  getBooks(filter:GridFilter) {
    const url = this.convertFilterToUrl(filter)
    return this.http.get<Book[]>(url);
  }
  createBook(book: Book) {
    return this.http.post<Book>(BASE_URL, book);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(`${BASE_URL}/${book.id}`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
