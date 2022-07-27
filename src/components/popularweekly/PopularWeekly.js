import { useState } from "react";
import BookList from "../BookList";
import { HAPI_BOOKS_API_URL, FETCH_OPTIONS } from "../../api";

function PopularWeekly() {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("All");

  function handleGenreChange(e) {
    setGenre(e.target.value);

    //GET DATA FROM HAPI API
    //======================
    fetch(`${HAPI_BOOKS_API_URL}/week/${genre}`, FETCH_OPTIONS)
      .then((res) => res.json())
      // .then((books) => {
      //   books.map((book) => console.log("Book content: ", book));
      // })

      .then((books) => setBooks(books))
      .catch((err) => console.error(err));

    console.log(books);
  }

  return (
    <div className="ui container">
      <div className="ui very padded piled tertiary segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Most Popular Books This Week By Genre
        </h1>
        <select
          className="ui search dropdown "
          name="genre"
          onChange={handleGenreChange}
        >
          <option value="All">Select Genre</option>
          <option value="biography">Biography</option>
          <option value="business">Business</option>
          <option value="classics">Classics</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="memoir">Memoir</option>
          <option value="mystery">Mystery</option>
          <option value="nonfiction">Nonfiction</option>
          <option value="poetry">Poetry</option>
          <option value="religion">Religion</option>
          <option value="romance">Romance</option>
          <option value="science">Science</option>
          <option value="suspense">Suspense</option>
          <option value="sports">Sports</option>
          <option value="thriller">Thriller</option>
        </select>
      </div>
      <div className="ui very padded  teal inverted segment">
        {books ? (
          <BookList books={books} />
        ) : (
          <div class="ui very padded loading segment">
            <p></p>
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopularWeekly;
