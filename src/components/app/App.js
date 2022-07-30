import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import MyLibrary from "../mylibrary/MyLibrary";
import BookDetails from "../BookDetails";
import PopularWeekly from "../popularweekly/PopularWeekly";
import PopularMonthly from "../popularmonthly/PopularMonthly";
import AnnualBooks from "../annualbooks/AnnualBooks";
import Login from "../login/Login";
import SourceRepo from "../sourcerepo/SourceRepo";

function App() {
  return (
    <div className="ui container main-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mylibrary" element={<MyLibrary />} />
          <Route path="/mylibrary/:id" element={<BookDetails />} />
          <Route path="/week" element={<PopularWeekly />} />
          <Route path="/month" element={<PopularMonthly />} />
          <Route path="/nominees" element={<AnnualBooks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sourcerepo" element={<SourceRepo />} />
          <Route
            path="*"
            element={<h2 style={{ color: "red" }}>404 Page Not Found</h2>}
          />

          {/* <Route path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <ProjectList />
        </Route>
        <Route exact path="/projects/new">
          <NewProject />
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetail />
        </Route> */}
          {/* <Route path="*">
          <h2>404 Page Not Found</h2>
        </Route> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
