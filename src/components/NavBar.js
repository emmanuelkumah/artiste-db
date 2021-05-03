import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsFillMicMuteFill } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo-container">
          <Link to="/" className="logo-text">
            <h2>
              Lip.Sync
              <span className="logo-icon">
                <BsFillMicMuteFill />
              </span>
            </h2>
          </Link>
        </div>

        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
