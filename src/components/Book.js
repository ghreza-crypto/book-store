import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/actions';

const Book = ({
  title, author, itemId, category,
}) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleRemove = () => {
    dispatch(removeBook({ URL, itemId }))
      .then(() => {
        dispatch(getBooks(URL));
      });
  };

  return (
    <div className="bookContainer">
      <div className="bookInfo">
        <p className="category">{category || 'Not specified'}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul className="actions">
          <li>
            <button type="button">Comments</button>
          </li>
          <div className="verticalDivider" />
          <li>
            <button type="button" onClick={() => handleRemove()}>Remove</button>
          </li>
          <div className="verticalDivider" />
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>

      <div className="progressContainer">

        <div className="progressInfo">

          <div className="circularProgressContainer">
            <div className="circularProgress" />
          </div>
          <div className="progressNumber">
            <h4>64%</h4>
            <p>Completed</p>
          </div>

        </div>

        <div className="progressDivider" />

        <div className="chapterInfo">
          <h4>Current Chapter</h4>
          <p>Chapter 1</p>
          <button type="button">Update progress</button>
        </div>

      </div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
export default Book;
