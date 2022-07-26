import { useEffect, useState } from "react";
import BookList from "../BookList";
import { HAPI_BOOKS_API_URL, FETCH_OPTIONS } from "../../api";

function PopularMonthly() {
  const [books, setBooks] = useState([]);

  //GET DATA FROM HAPI API
  //======================
  useEffect(() => {
    fetch(`${HAPI_BOOKS_API_URL}/month/2022/3`, FETCH_OPTIONS)
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
          Most Popular Books This Month
        </h1>
      </div>
      <div className="ui very padded segment">
        <BookList books={books} />
      </div>
    </div>
  );
}

export default PopularMonthly;
