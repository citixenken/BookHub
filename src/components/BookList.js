import Book from "./Book";
import { useState } from "react";

function BookList({ books }) {
  // console.log(books)
  return (
    <div className="ui doubling very padded stackable grid container">
      {books.map((book, idx) => (
        <div className="four wide column">
          <Book key={idx} book={book} />
        </div>
      ))}
    </div>
  );
}

export default BookList;
