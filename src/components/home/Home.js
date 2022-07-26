import React, { useState } from "react";
import BooksContainer from "../BooksContainer";
import BookList from "../BookList";
function Home() {
  const [loading, setLoading] = useState("");

  return (
    <>
      <div className="ui container">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Welcome To BookHub
        </h1>
        <p>A repository for your favourite books</p>

        {/* SEARCH INPUT */}
        <div className="ui fluid action input">
          <input type="text" placeholder="Search Books" />
          <select className="ui compact selection dropdown">
            <option value="name">Name</option>
            <option selected="" value="isbn">
              ISBN
            </option>
          </select>
          <div className="ui button">Search</div>
        </div>
        <BooksContainer />
      </div>
    </>
  );
}

export default Home;
