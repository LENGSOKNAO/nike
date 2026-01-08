import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const listData = [
  {
    title: "Extra 25% Off Select Styles",
    subtitle: "Use code STRONG",
    link: "/women-sale",
  },
  {
    title: "New Women's Arrivals",
    subtitle: "Just Dropped",
    link: "/women/new",
  },
  {
    title: "Free Shipping & Returns",
    subtitle: "Nike Members Only",
    link: "/membership",
  },
  {
    title: "Up to 40% Off Women's Shoes",
    subtitle: "Limited Time",
    link: "/women/shoes",
  },
  {
    title: "Workout Essentials for Women",
    subtitle: "Train Strong",
    link: "/women/training",
  },
  {
    title: "Trending Now: Women's Styles",
    subtitle: "Shop the Look",
    link: "/women/trending",
  },
  {
    title: "Comfort Meets Style",
    subtitle: "Everyday Women's Wear",
    link: "/women/lifestyle",
  },
];

const LinkPage = ({ color }) => {
  const [currentText, setCurrentText] = useState(0);
  const timer = useRef(null);
  const started = useRef(false);

  const autoPlay = () => {
    // function ()
    setCurrentText((t) => (t + 1) % listData.length);

    timer.current = setTimeout(autoPlay, 6000);
  };

  if (!started.current) {
    started.current = true;
    timer.current = setTimeout(autoPlay, 6000);
  }

  return (
    <div
      className={`${
        color ? "bg-black text-white" : "bg-gray-200"
      } py-5 overflow-hidden`}
    >
      <div
        className={`flex text-center transition-all duration-1000 ease-in-out `}
        style={{
          transform: `translateX(-${currentText * 100}%)`,
        }}
      >
        {listData.map((e, i) => (
          <div className=" w-full shrink-0" key={i}>
            <h2 className={` ${color ? "" : "underline"} text-sm  font-medium`}>
              <Link>{e.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkPage;
