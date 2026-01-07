import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screen/home/Home";
import MenHome from "./screen/men/MenHome";
import WomenHome from "./screen/women/womenHome";
import Sale from "./screen/sale/Sale";
import Test from "./components/men/Test";
import UsingProps from "./testing/UsingProps";
import Kids from "./screen/kids/Kids";
import ListProduct from "./testing/product/ListProduct";
import ProductDetial from "./testing/product/ProductDetial";
// import Kidproop from "./testing/kideproop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenHome />} />
        <Route path="/women" element={<WomenHome />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/testing" element={<ListProduct />} />
        <Route path="/testing/detail/:id" element={<ProductDetial />} />
        {/* <Route path="/testing/Kidproop" element={<Kidproop />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
