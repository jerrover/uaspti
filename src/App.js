import React from "react";
import { createRoot } from "react-dom/client"; 
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus"; 
import Categories from "./Pages/Categories";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/categories" element={<Categories />} />
          <Route path="/aboutus" element={<Aboutus />} /> 
        </Routes>
      </div>
    </Router>
  );
}

const root = createRoot(document.getElementById("root")); 

root.render(<App />); 

export default App;
