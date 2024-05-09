import React, { useState } from "react";
import axios from "axios";
import "./Extras.css";

const API_KEY_PIXABAY = "43802491-63e1b381457271f25df0b5533";
const API_KEY_OPENWEATHERMAP = "70e85557630a87ff98e7e4fc81bd421a";
const API_URL_PIXABAY = "https://pixabay.com/api/";
const API_URL_OPENWEATHERMAP = "https://api.openweathermap.org/data/2.5/weather";

const Extras = () => {
  const [extraSearchTerm, setExtraSearchTerm] = useState("");
  const [extraImages, setExtraImages] = useState([]);
  const [extraSelectedCity, setExtraSelectedCity] = useState("");
  const [extraWeatherData, setExtraWeatherData] = useState(null);
  const [extraLoading, setExtraLoading] = useState(false);

  const handleExtraImageSearch = async () => {
    try {
      const response = await axios.get(
        `${API_URL_PIXABAY}?key=${API_KEY_PIXABAY}&q=${extraSearchTerm}&image_type=photo`
      );
      // Ambil 10 gambar pertama dari respons
      const firstTenImages = response.data.hits.slice(0, 5);
      setExtraImages(firstTenImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  

  const handleExtraWeatherDataFetch = async (city) => {
    setExtraLoading(true);
    try {
      const response = await axios.get(
        `${API_URL_OPENWEATHERMAP}?q=${city}&appid=${API_KEY_OPENWEATHERMAP}&units=metric`
      );
      setExtraWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setExtraLoading(false);
    }
  };

  const handleExtraFormSubmit = (e) => {
    e.preventDefault();
    if (extraSelectedCity) {
      handleExtraWeatherDataFetch(extraSelectedCity);
    } else {
      handleExtraImageSearch();
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
      <h1 className="extra-heading">Image Search & Weather App</h1>
      <form className="extra-form" onSubmit={handleExtraFormSubmit}>
        <input
          type="text"
          value={extraSearchTerm}
          onChange={(e) => setExtraSearchTerm(e.target.value)}
          placeholder="Enter search term"
          className="extra-input"
        />
        <button type="submit" className="extra-button">Search Images</button>
      </form>
      <div className="extra-image-grid">
        {extraImages.map((image) => (
          <div key={image.id} className="extra-image-item">
            <img src={image.webformatURL} alt={image.tags} />
          </div>
        ))}
      </div>
      <form className="extra-form" onSubmit={handleExtraFormSubmit}>
        <select value={extraSelectedCity} onChange={(e) => setExtraSelectedCity(e.target.value)} className="extra-select">
          <option value="">Select a city</option>
          {citiesInJawaTengah.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button type="submit" className="extra-button">Get Weather</button>
      </form>
      {extraLoading && <p className="extra-loading">Loading...</p>}
      {extraWeatherData && (
        <div className="extra-weather-info">
          <h2>Weather in {extraWeatherData.name}</h2>
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
