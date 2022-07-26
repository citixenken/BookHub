import BookList from "../BookList";

function AnnualBooks() {
  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Annual Bestsellers
        </h1>
      </div>
      <div className="ui very padded segment">
        <BookList />
      </div>
    </div>
  );
}

export default AnnualBooks;
