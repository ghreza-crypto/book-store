import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.value);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.itemId}
          title={book.title}
          author={book.author}
          category={book.category}
          itemId={book.itemId}
        />
      ))}
    </div>
  );
};

export default BookList;
