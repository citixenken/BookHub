import BookList from "../BookList";

function PopularWeekly() {
  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Most Popular Books This Week
        </h1>
      </div>
      <div className="ui very padded segment">
        <BookList />
      </div>
    </div>
  );
}

export default PopularWeekly;
