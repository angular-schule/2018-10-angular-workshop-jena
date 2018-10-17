import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor(private rs: BookRatingService) { }

  ngOnInit() {
  }

  rateUp() {
    const ratedBook = this.rs.rateUp(this.book);
    console.log(ratedBook);
  }
  
  rateDown() {}

  getStars(): any[] {
    return new Array(this.book.rating);
  }

}
