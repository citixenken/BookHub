import { useState, useEffect } from "react";
import BookList from "../BookList";

function MyLibrary() {
  const [books, setBooks] = useState([]);

  //GET books from local DB
  //=======================
  const booksLocalURL = "http://localhost:3000/books";
  useEffect(() => {
    fetch(booksLocalURL)
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="ui container">
      <div className="ui very padded piled tertiary segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          My Library Collection
        </h1>
      </div>
      <div className="ui very padded teal inverted  segment">
        {books && <BookList books={books} />}
      </div>
    </div>
  );
}

export default MyLibrary;
