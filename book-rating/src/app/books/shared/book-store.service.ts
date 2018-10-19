import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { Observable, of } from 'rxjs';
import { delay, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`).pipe(
      catchError(err => {
        console.log('FEHLER', err);
        return of([]);
      }),
      map(rawBooks => rawBooks.map(
        rawBook => this.mapToBook(rawBook)
      ))
    );
    // TODO: Echte Bücher!
  }

  private mapToBook(rawBook: any): Book {
    return {
      isbn: rawBook.isbn,
      title: rawBook.title,
      description: rawBook.description,
      rating: rawBook.rating
    };
  }

  getSingle(isbn: string): Observable<Book> {
    // TODO: hier nicht any verwenden, sondern z.B. "BookResponse"
    return this.http.get<any>(`${this.apiUrl}/book/${isbn}`).pipe(
      map(rawBook => this.mapToBook(rawBook))
    );
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
