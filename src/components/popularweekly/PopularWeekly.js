import { useEffect, useState } from "react";
import BookList from "../BookList";
import { GET_BOOK_BY_POPULAR_WEEKLY, FETCH_OPTIONS } from "../../api";

function PopularWeekly() {
  const [books, setBooks] = useState([]);

  //GET DATA FROM HAPI API
  //======================
  useEffect(() => {
    fetch(`${GET_BOOK_BY_POPULAR_WEEKLY}`, FETCH_OPTIONS)
      .then((res) => res.json())
      // .then((books) => {
      //   books.map((book) => console.log("Book content: ", book));
      // })
      .then((books) => setBooks(books))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Most Popular Books This Week
        </h1>
      </div>
      <div className="ui very padded segment">
        {books && <BookList books={books} />}
      </div>
    </div>
  );
}

export default PopularWeekly;
