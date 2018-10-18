import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
    // TODO: Echte Bücher!
    // TODO: Error Handling
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/${isbn}`);
  }

  create(book: Book): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/book`,
      book,
      { responseType: 'text' } // weil API kein JSON liefert, sondern leeres Objekt
    );
  }

  update(book: Book): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/book/${book.isbn}`,
      book,
      { responseType: 'text' }
    );
  }



  getAllStatic(): Book[] {
    return [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen, fortgeschrittene Techniken, …',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      }
    ];
  }
}
