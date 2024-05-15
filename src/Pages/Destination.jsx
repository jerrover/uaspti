import React from "react";
import { Link } from "react-router-dom";
import "./Destination.css";

const categories = [
  { id: 1, name1: "AIR TERJUN", link: "terjun" },
  { id: 2, name1: "PEGUNUNGAN", link: "gunung" },
  { id: 3, name1: "SITUS", name2: "BERSEJARAH", link: "situs" },
  { id: 4, name1: "PANTAI", link: "pantai" },
];

const DestinationCategoryBubble = ({ category }) => {
  return (
    <div className="destination-category-bubble">
      <Link to={`/destination/${category.link}`}>
        <span className="destination-category-name1">{category.name1}</span>
        {category.name2 && <span className="destination-category-name2">{category.name2}</span>}
      </Link>
    </div>
  );
};

const DestinationCategoryList = () => {
  return (
    <div>
      <h1 className="destination-category-title">Kategori Wisata</h1>
      <div className="destination-category-list">
        {categories.map((category) => (
          <DestinationCategoryBubble key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};



export default DestinationCategoryList;
