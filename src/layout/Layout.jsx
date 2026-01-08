import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";

const Layout = ({ children, bg, text }) => {
  return (
    <div className="relative">
      <NavBar bg={bg} text={text} />
      {children}
      <Footer bg={bg} />
    </div>
  );
};

export default Layout;
