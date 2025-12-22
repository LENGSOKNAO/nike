import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import SportLight from "../components/home/SportLight";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <NavBar />
      {children}
      <SportLight />
      <Footer />
    </div>
  );
};

export default Layout;
