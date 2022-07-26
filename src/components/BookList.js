import Book from "./Book";

function BookList() {
  return (
    <div className="ui doubling very padded stackable grid container">
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
      <div className="four wide column">
        <Book />
      </div>
    </div>
  );
}

export default BookList;
