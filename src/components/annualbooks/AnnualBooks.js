import { useState } from "react";
import BookList from "../BookList";
import { HAPI_BOOKS_API_URL, FETCH_OPTIONS } from "../../api";

function AnnualBooks() {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("romance");
  const [year, setYear] = useState("2020");

  function handleChange(e) {
    setGenre(e.target.value);
    setYear(e.target.value);
    // setGenre(e.target.value);
    // setYear(e.target.value);

    //GET DATA FROM HAPI API
    //======================
    fetch(`${HAPI_BOOKS_API_URL}/nominees/${genre}/${year}`, FETCH_OPTIONS)
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
          Award-winning Books by Genre and Year
        </h1>
        {/* SELECT GENRE */}
        <select
          className="ui search dropdown"
          name="genre"
          onChange={handleChange}
        >
          <option value="">Select Genre</option>
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

        {/* SELECT YEAR */}
        <select
          className="ui search dropdown"
          name="year"
          onChange={handleChange}
        >
          <option value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>
      </div>
      <div className="ui very padded teal inverted segment">
        {books && <BookList books={books} />}
      </div>
    </div>
  );
}

export default AnnualBooks;
