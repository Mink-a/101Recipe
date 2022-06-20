import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Crusine from "./Crusine";
import Search from "./Search";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/crusine/:type" element={<Crusine />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
