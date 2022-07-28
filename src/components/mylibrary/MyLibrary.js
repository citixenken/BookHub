import { useState, useEffect } from "react";
import BookList from "../BookList";
import NewBookForm from "../NewBookForm";

function MyLibrary() {
  const [books, setBooks] = useState([]);
  const [showBookForm, setShowBookForm] = useState(false);

  //GET books from local DB
  //=======================
  const booksLocalURL = "http://localhost:3000/books";
  useEffect(() => {
    fetch(booksLocalURL)
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((err) => console.error(err));
  }, []);

  //DISPLAY NEW BOOK FORM
  //=================
  function handleToggleBookButton() {
    setShowBookForm((showBookForm) => !showBookForm);
  }

  //POST NEW BOOK TO LOCAL DB
  //=========================
  function handleNewBook(newBook) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    };
    fetch(booksLocalURL, options)
      .then((res) => res.json())
      .then((newBook) => setBooks([...books, newBook]))
      .catch((err) => console.error(err));
  }

  return (
    <div className="ui container">
      <div className="ui very padded piled tertiary segment">
        <h1
          className="ui header huge"
          style={{
            color: "firebrick",
            fontSize: 36,
            fontFamily: "Varela Round",
          }}
        >
          My Library Collection
        </h1>
        {/* ADD NEW BOOK BUTTON */}
        <div
          className="ui secondary inverted button"
          tabindex="0"
          onClick={handleToggleBookButton}
        >
          {showBookForm ? "Dismiss Form" : "Add New Book"}

          {/* <div class="hidden content">
            <i class="book icon"></i>
            <i class="right arrow icon"></i>
          </div> */}
        </div>
        {showBookForm ? (
          <NewBookForm onBookFormSubmission={handleNewBook} />
        ) : null}
      </div>
      <div className="ui very padded teal secondary inverted  segment">
        {books ? (
          <BookList books={books} />
        ) : (
          <div className="ui massive very padded inverted segment">
            <div className="ui active inverted dimmer">
              <div className="ui indeterminate large text loader">
                <h6>Search To Retrieve Books</h6>
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

export default MyLibrary;
