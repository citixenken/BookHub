import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import BooksContainer from "../BooksContainer";
import { HAPI_BOOKS_API_URL, FETCH_OPTIONS } from "../../api";

function Home() {
  const [books, setBooks] = useState(null);
  const [booksearch, setBookSearch] = useState("");

  // ON BUTTON CLICK
  //================
  function handleBookSearch() {
    //GET DATA FROM HAPI API
    //======================
    fetch(`${HAPI_BOOKS_API_URL}/search/${booksearch}`, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((err) => console.error(err));
    setBookSearch("");
  }
  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Welcome To BookHub
        </h1>

        <h3 style={{ color: "firebrick" }}>
          A repository of your favourite books
        </h3>
      </div>

      <div className="ui padded segment">
        {/* SEARCH INPUT */}
        <div className="ui input huge left icon fluid action search focus ">
          <input
            type="text"
            name="booksearch"
            value={booksearch}
            placeholder="Search Book"
            onChange={(e) => setBookSearch(e.target.value)}
          />
          <i className="book icon"></i>
          <div
            className="ui button"
            style={{ fontSize: 20 }}
            onClick={handleBookSearch}
          >
            Search
          </div>
        </div>
      </div>

      <div className="ui container">
        {books && <BooksContainer books={books} />}
      </div>
    </div>
  );
}

export default Home;
