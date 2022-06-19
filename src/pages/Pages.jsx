import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Crusine from "./Crusine";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crusine/:type" element={<Crusine />} />
    </Routes>
  );
}

export default Pages;
