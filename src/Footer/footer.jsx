import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy;2024 Dewi Jateng.</p>
        <p>Page developed with ❤️ by Team 4 - IFUMIE (Informatika UMN-Tarsisius Vireta)</p>
        <p>All rights reserved.</p>
        <div className="footer-navigation">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/destination" className="footer-link">Destinasi Wisata</Link>
          <Link to="/extras" className="footer-link">Image & Weather</Link>
          <Link to="/aboutus" className="footer-link">About Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
