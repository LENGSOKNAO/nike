import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screen/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
