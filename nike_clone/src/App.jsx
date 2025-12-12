import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screen/home/Home";
import MenHome from "./screen/men/MenHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
