import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

describe('BookRatingService', () => {
  let book: Book;
  let rs: BookRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    rs = TestBed.get(BookRatingService);

    book = {
      title: '',
      description: '',
      isbn: '',
      rating: 3
    };
  });


  it('should be created', () => {
    const service: BookRatingService = TestBed.get(BookRatingService);
    expect(service).toBeTruthy();
  });

  it('should increase the rating by 1 for rateUp', () => {
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toEqual(4); // konkreter Wert, nicht reimplementieren
  });
  
  it('should decrease the rating by 1 for rateDown', () => {
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toEqual(2);
  });
  
  it('should not rate higher than 5', () => {
    book.rating = 5;
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toEqual(5);
  });
  
  it('should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toEqual(1);
  });
});
