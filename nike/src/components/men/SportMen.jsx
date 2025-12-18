import React, { useRef, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router";
import BannerCart from "../props/cart/BannerCart";

const IconButton = ({ children }) => (
  <div
    className="w-10 h-10 flex items-center justify-center rounded-full 
                     bg-gray-100 hover:bg-gray-200 transition"
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
  const itemsToShow = 5;
  const maxIndex = Math.max(0, Sport.length - itemsToShow);

  const next = () => {
    setslideShow((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setslideShow((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
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
          <IconButton>
            <MdOutlineArrowBackIosNew />
          </IconButton>
          <IconButton>
            <button onClick={next}>
              <GrNext />
            </button>
          </IconButton>
        </div>
      </div>

      <div
        className="flex items-center gap-3 overflow-x-scroll pt-5"
        style={{ transform: getTransform() }}
        ref={useFull}
      >
        {Sport.map((e) => (
          <div className="min-w-100" style={{ width: `${100 / itemsToShow}%` }}>
            <BannerCart
              image={e.img}
              smallText=""
              bigText=""
              nameBtn={e.namebtn}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SportMen;
