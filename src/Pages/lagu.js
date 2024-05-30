import React, { useState } from "react";
import "./Home.css";

function Lagu() {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videoId, setVideoId] = useState("");
  const [videoFound, setVideoFound] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedVideo(event.target.value);
  };

  const searchVideos = () => {
    const videoTitles = {
      "Lir Ilir| Lagu Daerah Jawa Tengah | Budaya Indonesia | Dongeng Kita":
        "ZDGhJ4ToP2k",
      "Gambang Suling - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)":
        "AnIoCWmMeK0",
      "Prau Layar - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)":
        "J2p9Vytbm1Q",
      "Jaranan - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)": "JIAbbu8iELI",
      "Cublak Cublak Suweng - Lagu Daerah Jawa Tengah (dengan Lirik)":
        "aAj_dyAK9qU",
    };

    const selectedVideoId = videoTitles[selectedVideo];
    const apiKey = "AIzaSyDiZqZpcOWAYuHyZRFfJNCjrGnJ-IT9iQE";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${selectedVideoId}&key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const topVideo = data.items[0];
          setVideoId(topVideo.id.videoId);
          setVideoFound(true);
        } else {
          setVideoFound(false);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      {" "}
      <h2>Lagu Jawa Tengah</h2>
      <select className="select-lagu" value={selectedVideo} onChange={handleSelectChange}>
        <option value="">Select Video</option>
        <option value="Lir Ilir| Lagu Daerah Jawa Tengah | Budaya Indonesia | Dongeng Kita">
          Lir Ilir| Lagu Daerah Jawa Tengah | Budaya Indonesia | Dongeng Kita
        </option>
        <option value="Gambang Suling - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)">
          Gambang Suling - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)
        </option>
        <option value="Prau Layar - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)">
          Prau Layar - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)
        </option>
        <option value="Jaranan - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)">
          Jaranan - Lagu Daerah Jawa Tengah (Lirik dan Terjemahan)
        </option>
        <option value="Cublak Cublak Suweng - Lagu Daerah Jawa Tengah (dengan Lirik)">
          Cublak Cublak Suweng - Lagu Daerah Jawa Tengah (dengan Lirik)
        </option>
      </select>
      <button className="button-lagu" onClick={searchVideos}>Search</button>
      {videoFound && (
        <div className="video-container">
          {" "}
          {/* Menggunakan class video-container */}
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Lagu;
