import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import NavTop from "./Navbar/NavTop";

const Layout = ({ children }) => {
  return (
    <>
      <NavTop />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
