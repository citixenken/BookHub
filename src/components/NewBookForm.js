import React, { useState } from "react";

function NewBookForm({ onBookFormSubmission }) {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    rating: "",
    cover: "",
    description: "",
  });

  const [showBookForm, setShowBookForm] = useState(false);

  function handleFormChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setNewBook({ ...newBook, [name]: value });
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    onBookFormSubmission(newBook);
    setShowBookForm((showBookForm) => !showBookForm);

    //RESET form after submission
    //===========================
    setNewBook({
      title: "",
      author: "",
      rating: "",
      cover: "",
      description: "",
    });
  }

  return (
    <div className="ui container ">
      {showBookForm ? null : (
        <div className="ui very padded teal inverted segment">
          <form className="ui form big success" onSubmit={handleFormSubmit}>
            <div className="required field">
              <input
                type="text"
                name="title"
                value={newBook.title}
                placeholder="Enter Book Title"
                onChange={handleFormChange}
              />
            </div>
            <div className="required field">
              <input
                type="text"
                name="author"
                value={newBook.author}
                placeholder="Enter Book Author"
                onChange={handleFormChange}
              />
            </div>
            <div className="required field">
              <input
                type="number"
                name="rating"
                value={parseFloat(newBook.rating)}
                placeholder="Enter Book Rating"
                onChange={handleFormChange}
              />
            </div>
            <div className="required field">
              <input
                type="text"
                name="cover"
                value={newBook.cover}
                placeholder="Enter Book Cover URL"
                onChange={handleFormChange}
              />
            </div>
            <div className="required field">
              <textarea
                type="text"
                name="description"
                value={newBook.description}
                placeholder="Enter Book Description"
                onChange={handleFormChange}
                style={{ fontSize: 18, fontFamily: "Varela Round" }}
              ></textarea>
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
              style={{ margin: 20 }}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default NewBookForm;
