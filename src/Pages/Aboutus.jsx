import React from "react";
import Card from "../AboutUs/card";
import contacts from "../AboutUs/contacts";

const Aboutus = () => {
  return (
    <div>
      <div className="about-us" style={{ fontFamily: 'Poppins', textAlign: 'center', fontWeight:'bolder'}}>About Us</div>
      <div className="cards-container" style={{textAlign: 'center'}}>
        {contacts.map((contact) => (
          <Card
            key={contact.name}
            name={contact.name}
            imgURL={contact.imgURL}
            desc={contact.desc}
            email={contact.email}
            instagram={contact.instagram}
          />
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
