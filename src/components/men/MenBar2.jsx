import React from "react";
import img from "../../assets/bannerHome/banner2.jpg";

const MenBar2 = () => {
  return (
    <div>
      <h1 className="p-5 mt-20 font-medium text-2xl sm:px-10">Give Sport</h1>
      <div className="relative">
        <img src={img} alt="" />
        <div className="absolute">
          <h2 className="">2</h2>
          <h2 className="">2</h2>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default MenBar2;
