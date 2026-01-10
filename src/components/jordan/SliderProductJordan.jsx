import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

import Img1 from "../../assets/menpicsey/jordan/slideproduct/air-jordan-sneaker.jpg";
import Img2 from "../../assets/menpicsey/jordan/slideproduct/jordan-sneaker3.jpg";
import Img3 from "../../assets/menpicsey/jordan/slideproduct/jordan-sneaker4.jpg";
import Img4 from "../../assets/menpicsey/jordan/slideproduct/ball.jpg";
import Img5 from "../../assets/menpicsey/jordan/slideproduct/modelJordan1.jpg";
import Img6 from "../../assets/menpicsey/jordan/slideproduct/modelJordan2.jpg";

const imgSlider = [
  {
    img: Img1,
    name: 'Jordan 11 Retro "Gamma"',
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img2,
    name: 'Jordan 11 Retro "Gamma"',
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img3,
    name: 'Jordan 11 Retro "Gamma"',
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img4,
    name: 'Jordan 11 Retro "Gamma"',
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img5,
    name: 'Jordan 11 Retro "Gamma"',
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img6,
    name: 'Jordan 11 Retro "Gamma"',
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
];

const SliderProductJordan = () => {
  // Focus this step FIRST!!!!!
  const itemsSliderShow = 3;
  const [index, setIndex] = useState(0);

  const maxIndex = imgSlider.length - itemsSliderShow;
  // 2nd step
  const next = () => {
    setIndex((indexCorrent) =>
      indexCorrent < maxIndex ? indexCorrent + 1 : indexCorrent
    );
  };
  // 3rd step
  const prev = () => {
    setIndex((indexCorrent) =>
      indexCorrent > 0 ? indexCorrent - 1 : indexCorrent
    );
  };

  const transformX = `translateX(-${index * (100 / itemsSliderShow)}%)`;

  return (
    <div className="mx-1 sm:mx-10">
      <div className="hidden sm:block relative h-40">
        <h1 className="mt-5 text-2xl uppercase">popular right now</h1>

        <ul className="absolute bottom-5 right-0 flex items-center gap-3 text-sm">
          <li className="cursor-pointer hover:underline">View All</li>

          <li
            // 3rd
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100 transition"
          >
            <GrPrevious />
          </li>

          <li
            // 2nd
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white cursor-pointer hover:opacity-80 transition"
          >
            <GrNext />
          </li>
        </ul>
      </div>

      {/* Slider */}
      <div className="overflow-auto  mt-4">
        <div
          className="flex gap-x-3  transition-transform duration-300 ease-out"
          style={{ transform: transformX }}
          // 1St style set as ref replace useRef(null);
        >
          {imgSlider.map((item, i) => (
            <div
              key={i}
              // 1ST Product to show screen
              className="shrink-0"
              style={{ width: `${100 / itemsSliderShow}%` }}
            >
              <img src={item.img} alt="" className="w-full object-cover" />
              <h2 className="mt-2 font-medium">{item.name}</h2>
              <p className="text-gray-500 text-sm">{item.Description}</p>
              <h3 className="font-semibold">${item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderProductJordan;
