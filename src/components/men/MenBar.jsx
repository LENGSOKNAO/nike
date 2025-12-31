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
      <div className=" lg:flex  h-20 w-100% items-center text-xl font-medium px-10 cursor-pointer overflow-hidden">
        <div className=" h-a w-[35%] flex justify-start mb-2">
          <Link to="">Men</Link>
        </div>
        <div className=" h-auto w-full lg:w-[65%] ">
          <ul className="flex gap-x-10  ">
            {MenList.map((e, i) => (
              <li>{e.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenBar;
