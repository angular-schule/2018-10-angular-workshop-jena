import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable ,  of } from 'rxjs';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';

import { BookStoreService } from '../../shared/book-store.service';
import { BooksActionTypes } from '../actions/books.actions';
import * as booksActions from '../actions/books.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your application.
 */
@Injectable()
export class BooksEffects {

  @Effect()
  loadBooks$ = this.actions.pipe(
    ofType(BooksActionTypes.LoadBooks),
    switchMap(() => this.bs.getAll().pipe(
      map(books => new booksActions.LoadBooksSuccess(books)),
      catchError(err => of(new booksActions.LoadBooksFail(err)))
    ))
  );

  @Effect({ dispatch: false })
  success$ = this.actions.pipe(
    ofType(BooksActionTypes.LoadBooksSuccess),
    tap(() => console.log('BÜCHER WURDEN GELADEN!'))
  );


  constructor(
    private bs: BookStoreService,
    private actions: Actions) { }
}
