import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HomeApp from "./Pages/Home";
import Aboutus from "./Pages/Aboutus"; 
import DestinationCategoryList from "./Pages/Destination";
import Extras from "./Pages/Extras";
import Footer from "./Footer/footer";
import WisataAirTerjun from "./Destinations/airterjun";
import GunungList from "./Destinations/gunung";
import Bersejarah from "./Destinations/sejarah";
import PantaiList from "./Destinations/pantai";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" exact element={<HomeApp />} /> 
            <Route path="/destination" element={<DestinationCategoryList />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/aboutus" element={<Aboutus />} /> 
            <Route path="/destination/terjun" element={<WisataAirTerjun />} />
            <Route path="/destination/gunung" element={<GunungList />} />
            <Route path="/destination/situs" element={<Bersejarah />} />
            <Route path="/destination/pantai" element={<PantaiList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
