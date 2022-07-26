import React, { useState } from "react";
import BooksContainer from "../BooksContainer";
function Home() {
  const [loading, setLoading] = useState("");

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
          <select className="ui compact selection dropdown">
            <option value="name">Name</option>
            <option selected="" value="isbn">
              ISBN
            </option>
          </select>
          <div className="ui button">Search</div>
        </div>
      </div>

      <div className="ui container">
        <BooksContainer />
      </div>
    </div>
  );
}

export default Home;
