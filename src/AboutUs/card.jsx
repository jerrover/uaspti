import React from "react";
import iglogo from "../Assets/logo/logoig.jpg";
import maillogo from "../Assets/logo/logoemail.png";
import "./card.css";

const Card = ({ name, imgURL, desc, email, instagram }) => {
  const handleInstagramClick = (e) => {
    e.preventDefault(); 
    window.open(instagram, "_blank");
  };

  return (
    <div className="about-card">
      <div className="about-card-image">
        <img src={imgURL} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="about-card-footer">
        <p className="desc">{desc}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <div className="about-social-icons">
          <a href={instagram} onClick={handleInstagramClick}>
            <img className="about-card-logo" src={iglogo} alt="Instagram" />
          </a>
          <a href={`mailto:${email}`}>
            <img className="about-card-logo" src={maillogo} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
