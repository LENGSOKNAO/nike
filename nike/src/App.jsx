import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screen/home/Home";
import MenHome from "./screen/men/MenHome";
import WomenHome from "./screen/women/womenHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenHome />} />
        <Route path="women" element={<WomenHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
