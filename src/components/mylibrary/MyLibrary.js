import BookList from "../BookList";

function MyLibrary() {
  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          My Library Collection
        </h1>
      </div>
      <div className="ui very padded segment">
        <BookList />
      </div>
    </div>
  );
}

export default MyLibrary;
