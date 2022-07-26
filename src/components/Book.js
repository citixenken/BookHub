import { Routes, Route } from "react-router-dom";
import BookDetails from "./BookDetails";
function Book({ book }) {
  return (
    <div className="ui raised link cards">
      <div className="card">
        <div className="image">
          <img src={book.cover} />
        </div>
        <div className="content">
          <a className="header">{book.name}</a>
          <div className="meta">
            <span className="position">Rank: {book.position}</span>
          </div>
          <div className="rating">Book Rating: {book.rating} out of 5</div>
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
          <span className="left floated like">
            <i className="like icon"></i>
            Like
          </span>
          <span className="right floated star">
            <i className="star icon"></i>
            Favourite
          </span>
        </div>
      </div>
    </div>
  );
}

export default Book;
