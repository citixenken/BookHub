import { useState } from "react";
import BookList from "../BookList";

function MyLibrary() {
  const [books, setBooks] = useState(null);
  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          My Library Collection
        </h1>
      </div>
      <div className="ui very padded segment">{books && <BookList />}</div>
    </div>
  );
}

export default MyLibrary;
