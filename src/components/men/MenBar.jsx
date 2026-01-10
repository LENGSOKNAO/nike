import React from "react";
import LinkPage from "../props/LinkPage.jsx";
import PageMenuProop from "../props/BarPage/PageMenuProop.jsx";

const MenList = [
  { name: "Shoes", Link: "" },
  { name: "Clothing", Link: "" },
  { name: "Accessories", Link: "" },
];

const MenBar = () => {
  return (
    <div>
      <LinkPage />
      <PageMenuProop nav1={"men"} isText={true} nav2={MenList} />
    </div>
  );
};

export default MenBar;
