import React from "react";
import PageMenuProop from "../props/BarPage/PageMenuProop";
import Jordan from "../../assets/jordan.png";

const NavList = [
  { name: "New Arrivals", link: "" },
  { name: "Jordan Sport", link: "" },
  { name: "Purpose & Community", link: "" },
  { name: "Shoes", link: "" },
  { name: "Clothing", link: "" },
  { name: "Accessories", link: "" },
];

const NavbarJordan = () => {
  return (
    <div>
      <PageMenuProop logo={Jordan} isText={fale} Nav2={NavList} />
    </div>
  );
};

export default NavbarJordan;
