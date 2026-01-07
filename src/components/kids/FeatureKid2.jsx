import React from "react";
import CatProopKid from "../props/kids/CatProopKid";
import F4 from "../../assets/menpicsey/kidpic/featureKid/f4.jpg";
import F5 from "../../assets/menpicsey/kidpic/featureKid/f5.jpg";
import F6 from "../../assets/menpicsey/kidpic/featureKid/f6.jpg";
const imgList = [F4, F5, F6];

const FeatureKid2 = () => {
  return (
    <div>
      <CatProopKid name={"Gear Up By Sport"} img={imgList} />
    </div>
  );
};

export default FeatureKid2;
