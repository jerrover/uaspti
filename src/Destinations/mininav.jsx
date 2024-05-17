import React from "react";
import { Link } from "react-router-dom";
import "./mininav.css";

function Mininav() {
  return (
    <div className="mn-container">
      <nav className="mn-nav">
        <ul className="mn-ul">
          <li className="mn-li">
            <Link to="/destination/terjun" className="mn-a">Air Terjun</Link>
          </li>
          <li className="mn-li">
            <Link to="/destination/gunung" className="mn-a">Gunung</Link>
          </li>
          <li className="mn-li">
            <Link to="/destination/situs" className="mn-a">Situs Bersejarah</Link>
          </li>
          <li className="mn-li">
            <Link to="/destination/pantai" className="mn-a">Pantai</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Mininav;
