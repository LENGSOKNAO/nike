import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router";
import BannerCart from "../props/cart/BannerCart";

const IconButton = ({ children }) => (
  <button
    className="w-10 h-10 flex items-center justify-center rounded-full 
                     bg-gray-100 hover:bg-gray-200 transition"
  >
    {children}
  </button>
);
const Sport = [
  { img: "/src/assets/menpicsey/slider/sp1.jpg", namebtn: "shop", link: "" },
  { img: "/src/assets/menpicsey/slider/sp2.jpg", namebtn: "shop", link: "" },
  { img: "/src/assets/menpicsey/slider/sp3.jpg", namebtn: "shop", link: "" },
  { img: "/src/assets/menpicsey/slider/sp4.jpg", namebtn: "shop", link: "" },
  { img: "/src/assets/menpicsey/slider/sp5.jpg", namebtn: "shop", link: "" },
];
const SportMen = () => {
  return (
    <>
      <div className="flex justify-between px-20 mt-10">
        <h2>Shop by Sport </h2>
        <div className="flex gap-5 ">
          <IconButton>
            <MdOutlineArrowBackIosNew />
          </IconButton>
          <IconButton>
            <GrNext />
          </IconButton>
        </div>
      </div>
      <div className="">
        <div className="">
          {Sport.map((e) => {
            <div>
              <BannerCart
                image={e.img}
                smallText=""
                bigText=""
                nameBtn={e.namebtn}
              />
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default SportMen;
