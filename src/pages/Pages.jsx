import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Crusine from "./Crusine";
function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crusine" element={<Crusine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
