import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  // const bookLocalURL = `http://localhost:3000/books/${id}`;
  const bookLocalURL = `${process.env.REACT_APP_API_URL}/books/${id}`;

  useEffect(() => {
    fetch(bookLocalURL)
      .then((res) => res.json())
      .then((book) => setBook(book))
      .catch((err) => console.error(err));
  }, [id]);

  //LOADING PAGE
  //============
  if (!book)
    return (
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
              Retrieving Book Details...
            </h6>
          </div>
        </div>
        <p></p>
        <p></p>
      </div>
    );
  return (
    <div className="ui container">
      <div className="ui very padded piled tertiary teal inverted segment">
        <div className="image" style={{ padding: 20 }}>
          <img src={book.cover} alt="book cover" />
        </div>
        <div className="content">
          <a
            className="header"
            style={{
              color: "firebrick",
              fontSize: 32,
              fontFamily: "Varela Round",
              padding: 10,
            }}
          >
            {book.name || book.title}
          </a>
          <div className="meta">
            <span
              className="position"
              style={{
                color: "grey",
                fontSize: 20,
                fontFamily: "Varela Round",
              }}
            >
              {book.author}
            </span>
            <div
              className="rating"
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Varela Round",
                padding: 20,
              }}
            >
              {/* set rating to 1 dp */}
              {Math.round(book.rating * 10) / 10} out of 5
            </div>
            <div
              className="description"
              style={{
                color: "maroon",
                fontSize: 20,
                fontFamily: "Varela Round",
                padding: 20,
                textAlign: "left",
              }}
            >
              {book.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
