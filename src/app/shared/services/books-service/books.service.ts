import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { FilterTypes, GridFilter, SortType } from '../../interfaces/filter.interface';
import { FilterService } from '../filter-service/filter.service';
const BASE_URL = 'http://localhost:3000/books'
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient, private filterService: FilterService) { }
  convertFilterToUrl(filter:GridFilter): string {
    if(!filter) {
      return BASE_URL
    }
    const {page, pageSize: limit} = filter[FilterTypes.PAGINATION]
    const sortState = filter[FilterTypes.SORT]
    const searchState = filter[FilterTypes.SEARCH]
    if(filter && (!sortState.field && !searchState.field)) {
      if(limit === 0) {
        return BASE_URL
      } 
      return BASE_URL + `?_page=${page}&_limit=${filter[FilterTypes.PAGINATION].pageSize}`
    }
    const order = filter[FilterTypes.SORT].type === SortType.ASC ? 'asc' : 'desc'
    const sort = filter[FilterTypes.SORT].field
    if(limit > 0) {
      return BASE_URL + `?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`
    } else {
       return BASE_URL + `?_sort=${sort}&_order=${order}`
    }
  }
  getBooks(filter:GridFilter) {
    const url = this.convertFilterToUrl(filter)
    return this.http.get<Book[]>(url)
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
