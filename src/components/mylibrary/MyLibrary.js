import { useState, useEffect } from "react";
import Book from "../Book";
import NewBookForm from "../NewBookForm";

function MyLibrary() {
  const [books, setBooks] = useState([]);
  const [showBookForm, setShowBookForm] = useState(false);
  const [booksearch, setBookSearch] = useState("");

  //GET books from local DB
  //=======================
  // const booksLocalURL = "http://localhost:3000/books";
  const booksLocalURL = `${process.env.REACT_APP_API_URL}/books`;
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

  //SEARCH BOOKS
  //============
  const booksToDisplay = books.filter((book) =>
    book.title.toLowerCase().includes(booksearch.toLowerCase())
  );

  //DELETE BOOK FROM DB
  //===================
  function handleBookDelete(deletedBook) {
    const updatedBookList = books.filter((book) => book.id !== deletedBook.id);
    setBooks(updatedBookList);
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
          tabIndex="0"
          onClick={handleToggleBookButton}
          style={{ margin: 10, padding: 20 }}
        >
          {showBookForm ? "Dismiss Form" : "Add New Book"}
          {/* Add New Book */}
        </div>

        {showBookForm ? (
          <NewBookForm onBookFormSubmission={handleNewBook} />
        ) : null}
      </div>

      {/* SEARCH FIELD */}
      <div className="ui very padded tertiary segment">
        {/* SEARCH INPUT */}
        <div className="ui input huge left icon fluid search focus ">
          <input
            type="text"
            name="booksearch"
            value={booksearch}
            placeholder="Search Book By Title"
            onChange={(e) => setBookSearch(e.target.value)}
          />
          <i className="book icon"></i>
        </div>
      </div>
      {/* SEARCH FIELD */}

      <div className="ui very padded teal secondary inverted  segment">
        {books ? (
          <div className="ui doubling very padded stackable grid container">
            {booksToDisplay.map((book, idx) => (
              <div className="four wide column">
                <Book key={idx} book={book} onDeleteBook={handleBookDelete} />
              </div>
            ))}
          </div>
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
