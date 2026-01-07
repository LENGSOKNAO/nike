import React from "react";
import CatProopKid from "../props/kids/CatProopKid";
import F1 from "../../assets/menpicsey/kidpic/featureKid/f1.jpg";
import F2 from "../../assets/menpicsey/kidpic/featureKid/f2.jpg";
import F3 from "../../assets/menpicsey/kidpic/featureKid/f3.jpg";

const imgList = [F1, F2, F3];

const FeatureKId = () => {
  return (
    <div>
      <CatProopKid name="Shop By Age " img={imgList} />
    </div>
  );
};

export default FeatureKId;
