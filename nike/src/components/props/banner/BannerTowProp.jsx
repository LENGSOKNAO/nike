import React from "react";
import { Link } from "react-router";

const BannerTowProp = ({ img, sub, ti, nameBtn }) => {
  return (
    <div className="">
      <div className="relative">
        <img src={img} className="w-full" alt="" />
        <div className="absolute left-5  bottom-15 text-white">
          <h2 className="text-sm font-medium"> {sub} </h2>
          <h2 className="text-3xl md:text-xl lg:text-3xl xl:text-4xl font-medium py-5">
            {" "}
            {ti}{" "}
          </h2>
          <div className=" ">
            <Link className="bg-white px-5 py-2 text-black rounded-full text-lg font-medium">
              {nameBtn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTowProp;
