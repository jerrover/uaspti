import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation dari react-router-dom
import "./Navbar.css";
import logojateng from '../Assets/logo/LOGO DEWI JATENG.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Gunakan useLocation untuk mendapatkan informasi lokasi halaman

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logojateng} className="logojateng" alt="Logo Dewi Jateng" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? "menu-icon-line line-1" : "menu-icon-line"}></div>
          <div className={menuOpen ? "menu-icon-line line-2" : "menu-icon-line"}></div>
          <div className={menuOpen ? "menu-icon-line line-3" : "menu-icon-line"}></div>
        </div>
        <ul className={menuOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${location.pathname === "/" && "active"}`} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/destination" className={`navbar-link ${location.pathname === "/destination" && "active"}`} onClick={toggleMenu}>
              Destinasi Wisata
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/extras" className={`navbar-link ${location.pathname === "/extras" && "active"}`} onClick={toggleMenu}>
              Image & Weather
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutus" className={`navbar-link ${location.pathname === "/aboutus" && "active"}`} onClick={toggleMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
