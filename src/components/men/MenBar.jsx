import React from "react";
import { Link } from "react-router";
import ImgBanner from "../../assets/bannerHome/banner1.jpg";

const MenList = [
  { name: "Shoes", Link: "" },
  { name: "Clothing", Link: "" },
  { name: "Accessories", Link: "" },
];

const MenBar = () => {
  return (
    <>
      <div className=" lg:flex  h-20 w-100% items-center text-xl font-medium px-10  ">
        <div className=" h-a w-[40%] flex justify-start mb-2">
          <ul>
            <Link to="">
              <li>Men</li>
            </Link>
          </ul>
        </div>
        <div className=" h-auto lg:w-[60%] ">
          <ul className="flex gap-x-20  ">
            {MenList.map((e, i) => (
              <li>{e.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <img className="h-auto w-full" src={ImgBanner} alt="" />
      </div>
    </>
  );
};

export default MenBar;
