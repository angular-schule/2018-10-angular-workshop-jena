import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  url = 'https://angular.schule';
  d = new Date();

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
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

  updateSortList(book: Book) {
    const cleanedList = this.books.filter(
      b => b.isbn !== book.isbn
    );

    cleanedList.push(book); // mutierend, aber hier okay
    // oder: const newList = [...cleanedList, book];

    cleanedList.sort((a, b) => b.rating - a.rating);
    this.books = cleanedList;
  }

  addBookToList(book: Book) {
    this.books = [...this.books, book];
  }

}
