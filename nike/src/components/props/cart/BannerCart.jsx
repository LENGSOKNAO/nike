import React from "react";
import BtnWith from "../btn/BtnWith";
import MediumText from "../text/MediumText";
import SmallText from "../text/SmallText";

const BannerCart = ({ image, smallText, bigText, nameBtn }) => {
  return (
    <div className="relative text-white overflow-hidden">
      <img src={image} className="w-full h-full" alt="" />
      <div className="absolute bottom-10 left-10">
        <SmallText text={smallText} />
        <div className="py-5">
          <MediumText text={bigText} />
        </div>
        <BtnWith text={nameBtn} />
      </div>
    </div>
  );
};

export default BannerCart;
