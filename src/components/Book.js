const Book = ({title,author}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{author}</p>
            <button type="button">remove</button>
        </div>
     );
}
 
export default Book;