import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/actions';

const BookList = () => {
  const books = useSelector((state) => state.books.data);
  const isLoading = useSelector((state) => state.books.isLoading);
  const isSuccess = useSelector((state) => state.books.isSuccess);
  const errorMessage = useSelector((state) => state.books.errorMessage);
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  useEffect(() => {
    dispatch(getBooks(URL));
  }, []);

  const bookList = isSuccess && Object.keys(books).map((key) => (
    books[key].map((book) => (
      <Book key={key} title={book.title} author={book.author} itemId={key} />
    ))
  ));

  const error = !isSuccess && <p>{errorMessage}</p>;

  return (
    <>

      {isLoading ? <p>Loading...</p> : null}

      {bookList || error}
      <div className="horizontalDivider" />

    </>
  );
};

export default BookList;
