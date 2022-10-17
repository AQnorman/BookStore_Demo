import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Button,
  Typography,
  Grid,
  Paper,
  Stack,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BookImage } from './BookDetail.elements';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SquareLoader } from 'react-spinners';
import { Book } from '../../components';
import { booksDataActions } from '../../store/booksData';

const BookDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const currentBook = useSelector(state => state.books.currentBook);
  const relatedBooks = useSelector(state => state.books.relatedBooks);

  const loaderOverride = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  const getBookById = async () => {
    const book = await axios.get(`http://localhost:8000/api/books/${id}`);
    dispatch(booksDataActions.fetchBook(book.data.data));
    const relatedBooks = await axios.get(
      `http://localhost:8000/api/categories/${book.data.data.category_id}`
    );
    dispatch(booksDataActions.fetchRelatedBooks(relatedBooks.data.data.books));
    setLoading(false);
  };

  useEffect(() => {
    getBookById();
  }, [id, dispatch]);

  return (
    <Container maxWidth="xl">
      <Paper sx={{ marginTop: 5, padding: 2 }}>
        {loading ? (
          <SquareLoader color="#004578" cssOverride={loaderOverride} />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs lg={3}>
              <BookImage />
            </Grid>
            <Grid item xs lg={9}>
              <Typography variant="h2" gutterBottom>
                {currentBook.name}
              </Typography>
              <Typography gutterBottom sx={{ marginBottom: 2 }}>
                By{' '}
                <i>
                  {currentBook.author_fn} {currentBook.author_ln}
                </i>
              </Typography>
              <Typography sx={{ whiteSpace: 'pre-line' }} gutterBottom>
                {currentBook.desc}
              </Typography>
              <Button variant="contained" startIcon={<ShoppingCartIcon />}>
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        )}
      </Paper>
      <Container maxWidth="xl" sx={{ padding: '20px' }}>
        <Typography variant="h4">Related Books</Typography>
        {loading ? (
          <SquareLoader color="#004578" cssOverride={loaderOverride} />
        ) : (
          <Grid
            container
            columns={{ xs: 1, sm: 2, md: 6 }}
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            style={{ marginTop: 0, marginLeft: 0 }}
          >
            {relatedBooks.length !== 0 &&
              relatedBooks
                .filter(book => book.id !== currentBook.id)
                .map((book, idx) => (
                  <div>
                    <Book
                      id={book.id}
                      title={book.name}
                      fn={book.author_fn}
                      ln={book.author_ln}
                      category={currentBook.category.category}
                      desc={book.desc}
                      key={idx}
                    />
                  </div>
                ))}
          </Grid>
        )}
      </Container>
    </Container>
  );
};

export default BookDetail;

{
  /*

*/
}
