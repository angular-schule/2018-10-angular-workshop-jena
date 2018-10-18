import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService) { }

  ngOnInit() {
    // Alternativ: Synchroner Weg
    // this.isbn = this.route.snapshot.paramMap.get('isbn');

    // Asynchron
    this.route.paramMap.subscribe(params => {
      this.bs.getSingle(params.get('isbn'))
        .subscribe(book => this.book = book);
        // TODO: verschachtelte Subscription vermeiden!
    });
  }

}
