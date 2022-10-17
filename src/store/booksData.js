import { createSlice } from '@reduxjs/toolkit';

export const fetchBooks = (state, action) => ({
  ...state,
  books: action.payload,
});

export const fetchBook = (state, action) => ({
  ...state,
  currentBook: action.payload,
});

export const fetchRelatedBooks = (state, action) => ({
  ...state,
  relatedBooks: action.payload,
});

const booksDataSlice = createSlice({
  name: 'booksData',
  initialState: {
    books: [],
    currentBook: {},
    relatedBooks: [],
  },

  reducers: {
    fetchBooks,
    fetchBook,
    fetchRelatedBooks,
  },
});

export const booksDataActions = booksDataSlice.actions;

export default booksDataSlice.reducer;
