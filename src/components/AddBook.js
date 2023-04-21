import { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuid } from 'uuid';
import { addBook, getBooks } from '../redux/books/actions';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = uuid();
    dispatch(addBook({
      URL,
      newBook: {
        item_id: itemId,
        title,
        author,
        category: '',
      },
    })).then(() => {
      dispatch(getBooks(URL));
    });
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
