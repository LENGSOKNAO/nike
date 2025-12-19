import React, { useRef, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router";
import BannerCart from "../props/cart/BannerCart";

const IconButton = ({ children }) => (
  <div
    className="w-10 h-10 flex items-center justify-center rounded-full 
                     transition cursor-pointer"
  >
    {children}
  </div>
);
const Sport = [
  { img: "/src/assets/menpicsey/slider/sp1.jpg", namebtn: "shop", link: "" },
  { img: "/src/assets/menpicsey/slider/sp2.jpg", namebtn: "shop", link: "" },
  { img: "/src/assets/menpicsey/slider/sp3.jpg", namebtn: "shop", link: "" },
  { img: "/src/assets/menpicsey/slider/sp4.jpg", namebtn: "shop", link: "" },
  { img: "/src/assets/menpicsey/slider/sp5.jpg", namebtn: "shop", link: "" },
];
const SportMen = () => {
  const [slideShow, setslideShow] = useState(0);
  const useFull = useRef(null);

  const itemsToShow = 3;
  const maxIndex = Math.max(0, Sport.length - itemsToShow);

  const next = () => {
    setslideShow(
      (prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex)
      // if prvIndex less than maxIndex add new slide and else stop
    );
  };

  const prev = () => {
    setslideShow(
      (prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex)
      // if length of slider bigtest than 0 black slide and length less than 0 stop
    );
  };

  // Calculate transform for smooth sliding
  const getTransform = () => {
    const itemWidth = 100 / itemsToShow; // Percentage per item
    return `translateX(-${slideShow * itemWidth}%)`;
  };
  return (
    <>
      <div className="flex justify-between px-20 mt-10">
        <h1>Shop by Sport </h1>
        <div className="flex gap-5 ">
          <button
            onClick={prev}
            className={` rounded-4xl ${
              slideShow === 0
                ? "bg-black/10 opacity-50"
                : "bg-black/10 hover:bg-gray-200"
            }`}
          >
            <IconButton>
              <MdOutlineArrowBackIosNew />
            </IconButton>
          </button>
          <button
            onClick={next}
            className={` rounded-4xl ${
              slideShow !== 0
                ? "bg-black/10 opacity-50"
                : "bg-black/10 hover:bg-gray-200"
            }`}
          >
            <IconButton>
              <GrNext />
            </IconButton>
          </button>
        </div>
      </div>
      <div className="overflow-x-scroll mx-[2%]">
        <div
          className="flex items-center gap-3 py-5"
          style={{ transform: getTransform() }}
          ref={useFull}
        >
          {Sport.map((e) => (
            <div
              className="min-w-150"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <BannerCart
                image={e.img}
                smallText=""
                bigText=""
                nameBtn={e.namebtn}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SportMen;
