import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookList from "../BookList";
import { HAPI_BOOKS_API_URL, FETCH_OPTIONS } from "../../api";

function PopularMonthly() {
  const [books, setBooks] = useState([]);
  const { year, month } = useParams();

  //GET DATA FROM HAPI API
  //======================
  useEffect(() => {
    fetch(`${HAPI_BOOKS_API_URL}/month/${year}/${month}`, FETCH_OPTIONS)
      .then((res) => res.json())
      // .then((books) => {
      //   books.map((book) => console.log("Book content: ", book));
      // })
      .then((books) => setBooks(books))
      .catch((err) => console.error(err));
  }, [year, month]);

  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Top 15 Most Popular Books By Year and Month
        </h1>
        {/* SELECT YEAR */}
        <select className="ui search dropdown">
          <option disabled value="">
            Select Year
          </option>
          <option value="0">2022</option>
          <option value="1">2021</option>
          <option value="2">2020</option>
          <option value="3">2019</option>
          <option value="4">2018</option>
        </select>
        {/* SELECT MONTH */}
        <select className="ui search dropdown">
          <option disabled value="">
            Select Month
          </option>
          <option value="0">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="2">4</option>
          <option value="2">5</option>
          <option value="2">6</option>
          <option value="2">7</option>
          <option value="2">8</option>
          <option value="2">9</option>
          <option value="2">10</option>
          <option value="2">11</option>
          <option value="2">12</option>
        </select>
      </div>
      <div className="ui very padded segment">
        {books && <BookList books={books} />}
      </div>
    </div>
  );
}

export default PopularMonthly;
