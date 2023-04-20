import { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = uuid();
    dispatch(addBook({ title, author, itemId }));
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
