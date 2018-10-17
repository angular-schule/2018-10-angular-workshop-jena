import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {

  @Output() rate = new EventEmitter<Book>();
  @Input() book: Book;
  bookPrice: number;

  constructor(private rs: BookRatingService) { }

  ngOnInit() {
    this.bookPrice = 34.90 + this.book.rating + (this.book.rating / 100);
  }

  rateUp() {
    const ratedBook = this.rs.rateUp(this.book);
    this.rate.emit(ratedBook);
  }

  rateDown() {
    const ratedBook = this.rs.rateDown(this.book);
    this.rate.emit(ratedBook);
  }

  getStars(): any[] {
    return new Array(this.book.rating);
  }

}
