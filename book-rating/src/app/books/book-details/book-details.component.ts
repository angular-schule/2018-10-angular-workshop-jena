import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService) { }

  ngOnInit() {
    // Alternativ: Synchroner Weg
    // this.isbn = this.route.snapshot.paramMap.get('isbn');

    // Asynchron
    this.book$ = this.route.paramMap.pipe(
      switchMap(params => this.bs.getSingle(params.get('isbn')))
    );
  }

}
