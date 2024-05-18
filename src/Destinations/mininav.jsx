import React from "react";
import { NavLink } from "react-router-dom";
import "./mininav.css";

function Mininav() {
  return (
    <div className="mn-container">
      <nav className="mn-nav">
        <ul className="mn-ul">
          <li className="mn-li">
            <NavLink to="/destination/terjun" className="mn-a" activeClassName="active">Air Terjun</NavLink>
          </li>
          <li className="mn-li">
            <NavLink to="/destination/gunung" className="mn-a" activeClassName="active">Gunung</NavLink>
          </li>
          <li className="mn-li">
            <NavLink to="/destination/situs" className="mn-a" activeClassName="active">Situs Bersejarah</NavLink>
          </li>
          <li className="mn-li">
            <NavLink to="/destination/pantai" className="mn-a" activeClassName="active">Pantai</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Mininav;
