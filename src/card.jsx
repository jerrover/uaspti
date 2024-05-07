import React from "react";

const Card = ({ name, imgURL, phone, email }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{name}</h3>
      </div>
      <img src={imgURL} alt={name} />
      <div className="card-body">
        <hr />
        <p>Phone: {phone}</p>
        <a href={`mailto:${email}`}>Email: {email}</a>
      </div>
    </div>
  );
};

export default Card;
