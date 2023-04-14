import Book from "./Book";
const BookList = () => {
    const books = [{
        id: 1,
        author: 'Suzzane Collins',
        title: 'The Hunger Game',
    },
    {
        id: 2,
        author: 'Frank Herbert',
        title: 'Dune',
    },
    {
        id: 3,
        author: 'Suzzane Collins',
        title: 'Capital in the Twenty-First Century',
    }];

    return (
        <div>
            {books.map((book) => (
                <Book key={book.id} title={book.title} author={book.author} category={book.category}></Book>
            ))}
        </div>
    );
}

export default BookList;