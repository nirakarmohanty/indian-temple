import React from "react";
import Home from "./router/Home/Home";
import Temple from "./router/Temple/Temple";
import Feedback from "./router/Feedback";
import Planner from "./router/Planner";
import NotFound from "./router/NotFound";
import { Routes, Route } from "react-router-dom";
import "@popperjs/core";
import Navbar from "./navbar/Navbar";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

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
      </Routes>
    </>
  );
}

export default App;
