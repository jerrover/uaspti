// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import HomeApp from "./Pages/Home";
import Aboutus from "./Pages/Aboutus"; 
import DestinationCategoryList from "./Pages/Destination";
import TripPlanner from "./Pages/tripplan";
import Footer from "./footer";
import WisataAirTerjun from "./Destinations/airterjun";
import GunungList from "./Destinations/gunung";
import Bersejarah from "./Destinations/sejarah";
import PantaiList from "./Destinations/pantai";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeApp />} /> 
          <Route path="/destination" element={<DestinationCategoryList />} />
          <Route path="/tripplan" element={<TripPlanner />} />
          <Route path="/aboutus" element={<Aboutus />} /> 
          {/* Tambahkan rute untuk setiap kategori */}
          <Route path="/destination/terjun" element={<WisataAirTerjun />} />
          <Route path="/destination/gunung" element={<GunungList />} />
          <Route path="/destination/situs" element={<Bersejarah />} />
          <Route path="/destination/pantai" element={<PantaiList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
