import React, { useState } from "react";
import BooksContainer from "../BooksContainer";
function Home() {
  const [books, setBooks] = useState(null);

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
        <div className="ui huge left icon fluid action input">
          <input type="text" placeholder="Search Book" />
          <i className="book icon"></i>
          <select
            className="ui compact selection dropdown"
            style={{ fontSize: 20 }}
          >
            <option value="name">Name</option>
            <option selected="" value="isbn">
              ISBN
            </option>
          </select>
          <div className="ui button" style={{ fontSize: 20 }}>
            Search
          </div>
        </div>
      </div>

      <div className="ui container">{books && <BooksContainer />}</div>
    </div>
  );
}

export default Home;
