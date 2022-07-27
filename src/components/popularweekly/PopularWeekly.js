import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookList from "../BookList";
import { HAPI_BOOKS_API_URL, FETCH_OPTIONS } from "../../api";

function PopularWeekly() {
  const [books, setBooks] = useState([]);
  const { genre } = useParams();

  //GET DATA FROM HAPI API
  //======================
  useEffect(() => {
    fetch(`${HAPI_BOOKS_API_URL}/week/${genre}`, FETCH_OPTIONS)
      .then((res) => res.json())
      // .then((books) => {
      //   books.map((book) => console.log("Book content: ", book));
      // })
      .then((books) => setBooks(books))
      .catch((err) => console.error(err));
  }, [genre]);

  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Most Popular Books This Week By Genre
        </h1>
        <select className="ui search dropdown">
          <option disabled value="">
            Select Genre
          </option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Fiction">Fiction</option>
        </select>
      </div>
      <div className="ui very padded segment">
        {books && <BookList books={books} />}
      </div>
    </div>
  );
}

export default PopularWeekly;
