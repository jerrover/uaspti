import React from "react";
import "./map.css"; 

function MapEmbed({ coordinates }) {
  return (
    <div className="map-container">
      <iframe
        title="Map"
        width="300"
        height="300"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://maps.google.com/maps?q=${coordinates}&output=embed`}
      />
    </div>
  );
}

export default MapEmbed;
