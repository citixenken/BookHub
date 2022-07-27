import BookList from "./BookList";

function BooksContainer({ books }) {
  return (
    <div className="ui very padded segment">
      <BookList books={books} />
    </div>
  );
}

export default BooksContainer;
