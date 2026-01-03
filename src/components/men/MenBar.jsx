import React from "react";
import { Link } from "react-router";
import ImgBanner from "../../assets/bannerHome/banner1.jpg";
import PageMenuProop from "../props/BarPage.jsx/PageMenuProop";

const MenList = [
  { name: "Shoes", Link: "" },
  { name: "Clothing", Link: "" },
  { name: "Accessories", Link: "" },
];

const MenBar = () => {
  return (
    <>
      <LinkPage />
      <PageMenuProop nav1={"men"} nav2={MenList} />
    </>
  );
};

export default MenBar;
