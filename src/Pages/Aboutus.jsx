import React, { useState, useEffect } from "react";
import Card from "../AboutUs/card";
import contacts from "../AboutUs/contacts";
import "./Aboutus.css"; // Import file CSS baru

const Aboutus = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Threshold untuk menampilkan kartu kontak
        setShowCards(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="intro-container">
        <div className="about-us">About Us</div>
        <div className="intro">
          <p>
            Halo! Kami adalah IFUMIE (Informatika UMN-Tarsisius Vireta), mahasiswa Informatika UMN yang sama-sama berasal dari SMA Tarsisius Vireta. Bersama-sama, kami mengeksplorasi dunia{" "}
            <i>Internet technology</i> dengan kreativitas dan semangat yang tak terbendung. Kami bukan hanya sekedar tim, tapi juga keluarga yang selalu menginspirasi satu sama lain untuk meraih prestasi terbaik!
          </p>
        </div>
      </div>
      <div className={`cards-container ${showCards ? "show" : ""}`}>
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
