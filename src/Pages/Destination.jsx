import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Destination.css";

const categories = [
  { id: 1, name1: "AIR TERJUN", link: "terjun" },
  { id: 2, name1: "PEGUNUNGAN", link: "gunung" },
  { id: 3, name1: "SITUS", name2: "BERSEJARAH", link: "situs" },
  { id: 4, name1: "PANTAI", link: "pantai" },
];

const DestinationCategoryBubble = ({ category }) => {
  return (
    <Link to={`/destination/${category.link}`} className="destination-category-bubble" data-aos="zoom-in">
      <span className="destination-category-name1">{category.name1}</span>
      {category.name2 && <span className="destination-category-name2">{category.name2}</span>}
    </Link>
  );
};

const DestinationCategoryList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className="backgroundya">
      <h1 className="destination-category-title" data-aos="fade-up">Kategori Wisata</h1>
      <div className="destination-category-list">
        {categories.map((category) => (
          <DestinationCategoryBubble key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default DestinationCategoryList;
