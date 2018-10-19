import { Book } from '../../shared/book';
import { BooksActions, BooksActionTypes } from '../actions/books.actions';

export interface BooksState {
  books: Book[];
  loading: boolean;
}

const initialState: BooksState = {
  books: [],
  loading: false
};


export function booksReducer(state: BooksState = initialState, action: BooksActions): BooksState {
  switch (action.type) {

    case BooksActionTypes.LoadBooks: {
      return { ...state, loading: true };
    }

    default: { return state; }
  }
}
