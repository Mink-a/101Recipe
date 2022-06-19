import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Crusine from "./Crusine";
import Search from "./Search";
import Recipe from "./Recipe";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crusine/:type" element={<Crusine />} />
      <Route path="/search/:search" element={<Search />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
