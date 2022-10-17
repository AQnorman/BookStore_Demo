import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksData';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
