import { useState } from "react";
import BookList from "../BookList";
import { HAPI_BOOKS_API_URL, FETCH_OPTIONS } from "../../api";

function PopularMonthly() {
  const [books, setBooks] = useState([]);
  // const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("3");

  function handleChange(e) {
    setMonth(e.target.value);
    // setYear(e.target.value);

    //GET DATA FROM HAPI API
    //======================
    fetch(`${HAPI_BOOKS_API_URL}/month/2022/${month}`, FETCH_OPTIONS)
      .then((res) => res.json())
      // .then((books) => {
      //   books.map((book) => console.log("Book content: ", book));
      // })

      .then((books) => setBooks(books))
      .catch((err) => console.error(err));
    console.log(books);
  }

  return (
    <div className="ui container">
      <div className="ui very padded piled tertiary segment">
        <h1
          className="ui header huge"
          style={{
            color: "firebrick",
            fontSize: 30,
            fontFamily: "Varela Round",
          }}
        >
          {/* Top 15 Most Popular Books By Year and Month */}
          Top 15 Most Popular Books By Month
        </h1>

        {/* SELECT MONTH */}
        <select
          className="ui search dropdown"
          name="month"
          onChange={handleChange}
        >
          <option value="">Select Month</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        {/* SELECT YEAR */}
        {/* <select
          className="ui search dropdown"
          name="year"
          onChange={handleChange}
        >
          <option value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select> */}
      </div>
      <div className="ui very padded teal inverted segment">
        {books ? (
          <BookList books={books} />
        ) : (
          <div className="ui massive very padded inverted segment">
            <div className="ui active inverted dimmer">
              <div className="ui indeterminate large text loader">
                <h6
                  style={{
                    color: "firebrick",
                    fontSize: 18,
                    fontFamily: "Varela Round",
                  }}
                >
                  Search To Retrieve Books
                </h6>
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

export default PopularMonthly;
