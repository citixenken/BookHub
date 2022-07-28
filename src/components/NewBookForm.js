import { useState } from "react";
function NewBookForm({ onBookFormSubmission }) {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    rating: "",
    cover: "",
  });
  function handleFormChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setNewBook({ ...newBook, [name]: value });
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    onBookFormSubmission(newBook);

    //RESET form after submission
    //===========================
    setNewBook({
      title: "",
      author: "",
      rating: "",
      cover: "",
    });
  }

  return (
    <div className="ui very padded teal inverted segment">
      <form className="ui form big success" onSubmit={handleFormSubmit}>
        <div className="required field">
          {/* <label>Book Title</label> */}
          <input
            type="text"
            name="title"
            value={newBook.title}
            placeholder="Enter Book Title"
            onChange={handleFormChange}
          />
        </div>
        <div className="required field">
          {/* <label>Book Author</label> */}
          <input
            type="text"
            name="author"
            value={newBook.author}
            placeholder="Enter Book Author"
            onChange={handleFormChange}
          />
        </div>
        <div className="required field">
          {/* <label>Book Rating</label> */}
          <input
            type="number"
            name="rating"
            value={parseFloat(newBook.rating)}
            placeholder="Enter Book Rating"
            onChange={handleFormChange}
          />
        </div>
        <div className="required field">
          {/* <label>Book Cover URL</label> */}
          <input
            type="text"
            name="cover"
            value={newBook.cover}
            placeholder="Enter Book Cover URL"
            onChange={handleFormChange}
          />
        </div>
        {/* <div className="ui success message">
          <div className="header">Form Completed</div>
          <p>Book details successfully added to database.</p>
        </div> */}
        {/* <div type="submit" className="ui submit primary huge button">
          Submit
        </div> */}
        <input
          className="ui submit primary huge button"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default NewBookForm;
