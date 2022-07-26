import Book from "./Book";

function BookList({ books }) {
  console.log(books);
  return (
    <div className="ui doubling very padded stackable grid container">
      {books.map((book) => (
        <div className="four wide column">
          <Book key={book.book_id} book={book} />
        </div>
      ))}
    </div>
  );
}

export default BookList;
