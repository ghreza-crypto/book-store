import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ title, author, itemId }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(itemId))}>remove</button>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
export default Book;
