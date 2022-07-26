import { Routes, Route } from "react-router-dom";
import BookDetails from "./BookDetails";
function Book() {
  return (
    <div className="ui raised link cards">
      <div className="card">
        <div className="image">
          <img src="/images/avatar2/large/kristy.png" />
        </div>
        <div className="content">
          <a className="header">Book Title</a>
          <div className="meta">
            <span className="date">Book Author</span>
          </div>
          <div className="description">Book Description</div>
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
