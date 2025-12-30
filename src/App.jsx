import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screen/home/Home";
import MenHome from "./screen/men/MenHome";
import WomenHome from "./screen/women/womenHome";
import Sale from "./screen/sale/Sale";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenHome />} />
        <Route path="/women" element={<WomenHome />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
