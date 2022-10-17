import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { booksDataActions } from '../../store/booksData';
import { Book, CategorySection } from '../../components';
import { BooksContainer, BooksWrapper } from './Books.elements';
import { Container, Typography } from '@mui/material';
import { SquareLoader } from 'react-spinners';
// import { books } from '../../books';

const Books = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books);

  const loaderOverride = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  useEffect(() => {
    async function getBooks() {
      const res = await axios.get('http://localhost:8000/api/books');
      dispatch(booksDataActions.fetchBooks(res.data.data));
      setLoading(false);
    }
    getBooks();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ padding: 5 }}>
      <Typography variant="h4">Categories</Typography>
      <CategorySection />
      <Typography variant="h4">Featured Books</Typography>
      {loading ? (
        <SquareLoader color="#004578" cssOverride={loaderOverride} />
      ) : (
        <BooksWrapper>
          {books.map((book, idx) => (
            <Book
              id={book.id}
              title={book.name}
              fn={book.author_fn}
              ln={book.author_ln}
              category={book.category.category}
              desc={book.desc}
              key={idx}
            />
          ))}
        </BooksWrapper>
      )}
    </Container>
  );
};

export default Books;
