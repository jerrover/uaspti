import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgItMW-abdYGZxs_O5z5LsJG9LbwfYErxdxlp6gWIxEq2UPW8m08U9s0Xt0exCfezPFQ9eu1oTlk2rmnIPaFOkz3HRushBitrlx_6iuoN51LWImFfvCjfXcn7KpwQ6oBvdj4roKJGkGOms6CLcn5UwrBuMPL3KlYc0dx7a0pQCx_BvqVrUo5mh-3g/w287-h320/Logo%20Provinsi%20Jawa%20Tengah.png"
            alt="Jawa Tengah Logo"
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
