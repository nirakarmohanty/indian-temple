import React from "react";
import Home from "./router/Home/Home";
import Temple from "./router/Temple/Temple";
import Feedback from "./router/Feedback/Feedback.jsx";
import Planner from "./router/Planner";
import NotFound from "./router/NotFound";
import { Routes, Route } from "react-router-dom";
import "@popperjs/core";
import Navbar from "./navbar/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../node_modules/bootstrap/js/dist/dropdown.js";
import TempleChardham from "./router/Temple/char-dham/TempleChardham";
import TempleJyotirlinga from "./router/Temple/jyotirlingas/TempleJyotirlinga";
import TempleDetilas from "./router/Temple/char-dham/TempleDetails.jsx";
import Footer from "./footer/Footer.jsx";
import TempleShakthiPeeth from "./router/Temple/sakti-peeth/Temple-ShakthiPeeth.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/temple" element={<Temple />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/planner" element={<Planner />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/chardham" element={<TempleChardham />} />
        <Route path="/jyotirlinga" element={<TempleJyotirlinga />} />
        <Route path="/shkathipeeth" element={<TempleShakthiPeeth />} />
        <Route path="/temple-details" element={<TempleDetilas />} />
      </Routes>
      <br></br>
      <Footer />
    </>
  );
}

export default App;
