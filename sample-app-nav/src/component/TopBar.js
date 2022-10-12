import "./TopBar.css";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark"
      justify-content="space-between"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/" end>
          Premature
        </NavLink>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-label="Expand Navigation"
        >
          <div class="navbar-toggler-icon"></div>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies" end>
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/memes" end>
                Memes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" end>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
