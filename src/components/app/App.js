import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Home from "../home/Home";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PopularWeekly />} />
          <Route path="/" element={<PopularMonthly />} />
          <Route path="/" element={<AnnualBooks />} />
          <Route path="/" element={<MyLibrary />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<SourceRepo />} />

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
    </div>
  );
}

export default App;
