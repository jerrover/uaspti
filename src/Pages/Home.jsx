import React, { useState, useEffect } from "react";
import SlickSliderSej from "../SlickSlider/slickslidersej";
import SlickSliderMak from "../SlickSlider/slickslidermak";
import SlickSliderMus from "../SlickSlider/slickslidermus";
import axios from "axios";
import Lagu from "./lagu";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const VIDEO_ID = "U5DvqDLSxbQ";

const HomeApp = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [jatengVideos, setJatengVideos] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchJatengVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBnkvHiAbucmt_xxqUG68pCuTXcFD0IVYQ&q=Berita+Jawa+Tengah&type=video&maxResults=3`
        );

        setJatengVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching Jawa Tengah videos:", error);
      }
    };

    fetchJatengVideos();
  }, []);

  return (
    <div className="animate-on-visible">
      <div className="home-judul bgitem" data-aos="fade-in">
        <iframe
          width="600"
          height="315"
          src={`https://www.youtube.com/embed/IVIGEGsNB_8?autoplay=1&loop=1&playlist=IVIGEGsNB_8&controls=0&mute=1&showinfo=0&modestbranding=1`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h1>Dewi Jateng</h1>
        <p>Destinasi Wisata Jawa Tengah</p>
      </div>
      <div className="home-container" data-aos="fade-up">
        <div className="home-video-container">
          <ul>
            <li>
              <iframe
                width="600"
                height="315"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&loop=0&controls=1&mute=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </li>
          </ul>
        </div>
        <div
          className={`home-description-container ${
            isSmallScreen ? "below-video" : ""
          }`}
          data-aos="fade-up"
        >
          <h3>Jawa Tengah</h3>
          <p>
            Jawa Tengah, sebuah provinsi yang terletak di bagian tengah Pulau
            Jawa, Indonesia, memikat dengan kekayaan budaya, sejarah yang dalam,
            dan keindahan alam yang menakjubkan. Dikenal sebagai jantung budaya
            Jawa, provinsi ini memelihara tradisi-tradisi kuno seperti wayang
            kulit, batik, dan kerajinan tangan lainnya.
          </p>
        </div>
      </div>
      <div className="home-sliklik" data-aos="fade-up">
        <SlickSliderSej />
      </div>
      <div className="home-sliklik" data-aos="fade-up">
        <SlickSliderMak />
      </div>
      <div className="home-sliklik" data-aos="fade-up">
        <SlickSliderMus />
      </div>
      <div className="home-videojateng" data-aos="fade-up">
        <h2>Berita Seputar Jawa Tengah</h2>
        <div className="home-video-grid">
          {jatengVideos.slice(0, 6).map((video) => (
            <div key={video.id.videoId} className="home-video-item">
              <div className="video-wrapper">
                <iframe
                  width="300"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=0&loop=0&controls=1&mute=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <Lagu />
      </div>
    </div>
  );
};

export default HomeApp;
