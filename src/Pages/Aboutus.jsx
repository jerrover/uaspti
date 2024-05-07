import React from "react";
import Card from "../card";
import contacts from '../contacts';
import "../about.css"

const Aboutus = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="cards-container">
        {contacts.map((contact) => (
          <Card
            key={contact.email}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
