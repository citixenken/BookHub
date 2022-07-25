import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="ui pointing massive menu">
      <NavLink className="active header item" to="/">
        Home
      </NavLink>
      <NavLink className="item" to="/weekly">
        Most Popular - Weekly
      </NavLink>
      <NavLink className="item" to="/monthly">
        Most Popular - Monthly
      </NavLink>
      <NavLink className="item" to="/annual">
        Books of the Year
      </NavLink>
      <NavLink className="item" to="/mylibrary">
        My Library
      </NavLink>
      <div className="ui right massive menu">
        <NavLink className="active blue item" to="/login">
          Login
        </NavLink>
        <NavLink className="red item" to="/sourcerepo">
          Source Repo
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
