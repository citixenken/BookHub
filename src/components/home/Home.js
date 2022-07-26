import React, { useState } from "react";
import BooksContainer from "../BooksContainer";
import { HAPI_BOOKS_API_URL, FETCH_OPTIONS } from "../../api";

function Home() {
  const [books, setBooks] = useState(null);
  const [booksearch, setBookSearch] = useState("");

  // ON BUTTON CLICK
  //================
  function handleBookSearch() {
    //For any given book name, replace whote space with "+" and to lowercase
    //======================================================================
    // booksearch = booksearch.replace(/\s+/g, "+").toLowerCase();

    //GET DATA FROM HAPI API
    //======================
    fetch(
      `${HAPI_BOOKS_API_URL}/search/${booksearch
        .replace(/\s+/g, "+")
        .toLowerCase()}`,
      FETCH_OPTIONS
    )
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((err) => console.error(err));

    console.log(books);
    setBookSearch("");
  }
  return (
    <div className="ui container">
      <div className="ui very padded tertiary grey inverted segment">
        <h1
          className="ui header huge"
          style={{
            color: "firebrick",
            fontSize: 52,
            fontFamily: "Varela Round",
          }}
        >
          <i className="book icon"></i>
          BookHub
        </h1>

        <h3 style={{ color: "teal", fontSize: 20, fontFamily: "Varela Round" }}>
          A Repository of Your Favourite Books
        </h3>
      </div>

      <div className="ui very padded tertiary segment">
        {/* SEARCH INPUT */}
        <div className="ui input huge left icon fluid action search focus ">
          <input
            type="text"
            name="booksearch"
            value={booksearch}
            placeholder="Search Book By Title"
            onChange={(e) => setBookSearch(e.target.value)}
          />
          <i className="book icon"></i>
          <div
            className="ui button primary"
            style={{ fontSize: 20, fontFamily: "Varela Round" }}
            onClick={handleBookSearch}
          >
            Search
          </div>
        </div>
      </div>

      <div className="ui container">
        {books ? (
          <BooksContainer books={books} />
        ) : (
          <div className="ui massive very padded inverted segment">
            <div className="ui active inverted dimmer">
              <div className="ui indeterminate large text loader">
                <h6
                  style={{
                    color: "firebrick",
                    fontSize: 18,
                    fontFamily: "Varela Round",
                  }}
                >
                  Search To Retrieve Books
                </h6>
              </div>
            </div>
            <p></p>
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
