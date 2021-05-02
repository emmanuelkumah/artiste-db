import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link className="nav-logo" to="/">
          <h2>Lip/sync</h2>
        </Link>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
