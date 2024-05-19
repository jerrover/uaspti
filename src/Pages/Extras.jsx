import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Extras.css";

// Import local images
import semarangImg from "../Assets/kota/semarang.png";
import surakartaImg from "../Assets/kota/surakarta.jpg";
import magelangImg from "../Assets/kota/magelang.jpeg";
import pekalonganImg from "../Assets/kota/pekalongan.jpg";
import tegalImg from "../Assets/kota/tegal.png";
import salatigaImg from "../Assets/kota/salatiga.jpg";
import purwokertoImg from "../Assets/kota/purwokerto.jpg";
import kudusImg from "../Assets/kota/kudus.jpg";
import pemalangImg from "../Assets/kota/pemalang.jpg";

const API_KEY_PIXABAY = "43802491-63e1b381457271f25df0b5533";
const API_KEY_OPENWEATHERMAP = "70e85557630a87ff98e7e4fc81bd421a";
const API_URL_PIXABAY = "https://pixabay.com/api/";
const API_URL_OPENWEATHERMAP = "https://api.openweathermap.org/data/2.5/weather";

const cityImages = {
  Semarang: semarangImg,
  Surakarta: surakartaImg,
  Magelang: magelangImg,
  Pekalongan: pekalonganImg,
  Tegal: tegalImg,
  Salatiga: salatigaImg,
  Purwokerto: purwokertoImg,
  Kudus: kudusImg,
  Pemalang: pemalangImg,
};

const Extras = () => {
  const [extraSearchTerm, setExtraSearchTerm] = useState("");
  const [extraImages, setExtraImages] = useState([]);
  const [extraSelectedCity, setExtraSelectedCity] = useState("");
  const [extraWeatherData, setExtraWeatherData] = useState(null);
  const [extraLoading, setExtraLoading] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [cityImage, setCityImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (extraSearchTerm) {
      handleExtraImageSearch();
    }
  }, [sortBy]);

  const handleExtraImageSearch = async () => {
    try {
      const response = await axios.get(
        `${API_URL_PIXABAY}?key=${API_KEY_PIXABAY}&q=${extraSearchTerm}&image_type=photo${sortBy ? `&order=${sortBy}` : ''}`
      );
      const firstTenImages = response.data.hits.slice(0, 5);
      setExtraImages(firstTenImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleExtraWeatherDataFetch = async () => {
    setExtraLoading(true);
    try {
      const response = await axios.get(
        `${API_URL_OPENWEATHERMAP}?q=${extraSelectedCity}&appid=${API_KEY_OPENWEATHERMAP}&units=metric`
      );
      setExtraWeatherData(response.data);
      setCityImage(cityImages[extraSelectedCity]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setExtraLoading(false);
    }
  };

  const handleExtraImageFormSubmit = (e) => {
    e.preventDefault();
    handleExtraImageSearch();
  };

  const handleExtraWeatherFormSubmit = (e) => {
    e.preventDefault();
    if (extraSelectedCity) {
      handleExtraWeatherDataFetch();
    }
  };

  const citiesInJawaTengah = [
    "Semarang",
    "Surakarta",
    "Magelang",
    "Pekalongan",
    "Tegal",
    "Salatiga",
    "Purwokerto",
    "Kudus",
    "Pemalang",
  ];

  return (
    <div className="extra-container">
      <h1 className="extra-heading" data-aos="fade-in">Image Search & Weather App</h1>
      <form className="extra-form" onSubmit={handleExtraImageFormSubmit}>
        <input
          type="text"
          value={extraSearchTerm}
          onChange={(e) => setExtraSearchTerm(e.target.value)}
          placeholder="Enter search term"
          className="extra-input"
          data-aos="fade-in"
        />
        <button type="submit" className="extra-button" data-aos="fade-in">Search Images</button>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="extra-select" data-aos="fade-in">
          <option value="">Sort by</option>
          <option value="popular">Popular</option>
          <option value="latest">Latest</option>
          <option value="popular&page=1&order=asc">Ascending Aspect Ratio</option>
          <option value="popular&page=1&order=desc">Descending Aspect Ratio</option>
          <option value="downloads">Downloads</option>
        </select>
      </form>
      <div className="extra-image-grid" data-aos="fade-in">
        {extraImages.map((image) => (
          <div key={image.id} className="extra-image-item">
            <img src={image.webformatURL} alt={image.tags} />
          </div>
        ))}
      </div>
      <form className="extra-form" onSubmit={handleExtraWeatherFormSubmit}>
        <select value={extraSelectedCity} onChange={(e) => setExtraSelectedCity(e.target.value)} className="extra-select" data-aos="fade-in">
          <option value="">Select a city</option>
          {citiesInJawaTengah.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button type="submit" className="extra-button" data-aos="fade-in">Get Weather</button>
      </form>
      {extraLoading && <p className="extra-loading" data-aos="fade-in">Loading...</p>}
      {extraWeatherData && (
        <div className="extra-weather-info" data-aos="fade-in">
          <h2>Weather in {extraWeatherData.name}</h2>
          {cityImage && <img src={cityImage} alt={extraSelectedCity} className="extra-city-image" />}
          <p>Temperature: {extraWeatherData.main.temp}°C</p>
          <p>Description: {extraWeatherData.weather[0].description}</p>
          <p>Humidity: {extraWeatherData.main.humidity}%</p>
          <p>Wind Speed: {extraWeatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Extras;
