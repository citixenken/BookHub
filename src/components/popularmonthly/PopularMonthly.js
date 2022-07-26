import BookList from "../BookList";
function PopularMonthly() {
  return (
    <div className="ui container">
      <div className="ui very padded segment">
        <h1 className="ui header huge" style={{ color: "firebrick" }}>
          Most Popular Books This Month
        </h1>
      </div>
      <div className="ui very padded segment">
        <BookList />
      </div>
    </div>
  );
}

export default PopularMonthly;
