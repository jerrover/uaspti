import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logojateng from '../Assets/logo/LOGO DEWI JATENG.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src= {logojateng}
            className="logojateng"
          />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <div
            className={menuOpen ? "menu-icon-line line-1" : "menu-icon-line"}
          ></div>
          <div
            className={menuOpen ? "menu-icon-line line-2" : "menu-icon-line"}
          ></div>
          <div
            className={menuOpen ? "menu-icon-line line-3" : "menu-icon-line"}
          ></div>
        </div>
        <ul className={menuOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/destination" className="navbar-link" onClick={toggleMenu}>
              Destinasi Wisata
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/extras" className="navbar-link" onClick={toggleMenu}>
              Extras
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutus" className="navbar-link" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
