import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="ui pointing massive menu">
      <NavLink className="active header item" to="/search">
        Home
      </NavLink>
      <NavLink className="item" to="/week">
        Most Popular - Week
      </NavLink>
      <NavLink className="item" to="/month">
        Most Popular - Month
      </NavLink>
      <NavLink className="item" to="/nominees">
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
