import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <p>{title}</p>
    <p>{author}</p>
    <button type="button">remove</button>
  </div>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
