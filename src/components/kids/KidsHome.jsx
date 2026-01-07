import React from "react";
import PageMenuProop from "../props/BarPage/PageMenuProop";
import LinkPage from "../props/LinkPage";
const menuList = [
  { name: "Shop by Age", link: "" },
  { name: "shoes", link: "" },
  { name: "clothing", link: "" },
  { name: "Accessories", link: "" },
  { name: "Running Shoe Finder", link: "" },
];

const KidsHome = () => {
  return (
    <div>
      <LinkPage />
      <PageMenuProop nav1={"Kids"} nav2={menuList} />
    </div>
  );
};

export default KidsHome;
