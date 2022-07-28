import { Routes, Route } from "react-router-dom";
import BookDetails from "./BookDetails";

function Book({ book, onDeleteBook }) {
  const bookLocalURL = `http://localhost:3000/books/${book.id}`;

  //DELETE FROM DB
  //==============
  function handleBookDelete() {
    fetch(bookLocalURL, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => onDeleteBook(book))
      .catch((err) => console.error(err));
  }
  return (
    <div
      className="ui raised link cards"
      style={{
        fontFamily: "Varela Round",
      }}
    >
      <div className="card">
        <div className="image">
          <img src={book.cover} />
        </div>
        <div className="content">
          <a className="header">{book.name || book.title}</a>
          <div className="meta">
            <span className="position">
              {/* Rank: {book.position || book.author} */}
              {book.author}
            </span>
            <div className="rating">
              {/* set rating to one dp */}
              {Math.round(book.rating * 10) / 10} out of 5
            </div>
          </div>
        </div>
        <div className="extra content">
          <div className="ui basic green button">Book Details</div>
          <div>
            <Routes>
              <Route path="/book:id" element={<BookDetails />} />
            </Routes>
          </div>
        </div>
        <div className="extra content">
          <button className="ui submit primary button left floated">
            ❤️ Fav
          </button>
          {/* DELETE BOOK */}
          <button
            onClick={handleBookDelete}
            className="ui submit basic red button right floated"
            style={{ color: "red" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
