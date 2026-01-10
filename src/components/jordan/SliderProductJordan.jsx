import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Img1 from "../../assets/menpicsey/jordan/slideproduct/air-jordan-sneaker.jpg";
import Img2 from "../../assets/menpicsey/jordan/slideproduct/jordan-sneaker3.jpg";
import Img3 from "../../assets/menpicsey/jordan/slideproduct/jordan-sneaker4.jpg";
import Img4 from "../../assets/menpicsey/jordan/slideproduct/ball.jpg";
import Img5 from "../../assets/menpicsey/jordan/slideproduct/modelJordan1.jpg";
import Img6 from "../../assets/menpicsey/jordan/slideproduct/modelJordan2.jpg";

const imgSlider = [
  {
    img: Img1,
    name: `Jordan 11 Retro "Gamma"`,
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img2,
    name: `Jordan 11 Retro "Gamma"`,
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img3,
    name: `Jordan 11 Retro "Gamma"`,
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img4,
    name: `Jordan 11 Retro "Gamma"`,
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img5,
    name: `Jordan 11 Retro "Gamma"`,
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
  {
    img: Img6,
    name: `Jordan 11 Retro "Gamma"`,
    Description: "Baby/Toddler Shoes",
    price: 90,
  },
];
const SliderProductJordan = () => {
  return (
    <>
      <div className="mx-1 sm:mx-10">
        <div className="hidden sm:block relative h-full ">
          <div className="  flex justify-between  w-auto  h-40">
            <h1 className="mt-5 text-2xl uppercase">popular rigth now </h1>
            <div className="absolute bottom-5 right-0 w-full">
              <ul className="flex items-center justify-end gap-3 text-sm">
                <li className="cursor-pointer hover:underline">View All</li>

                <li className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100 transition">
                  <GrPrevious className="text-lg" />
                </li>

                <li className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100 transition">
                  <GrNext className="text-lg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex gap-x-3 p-2 overflow-auto overscroll-contain">
            {imgSlider.map((e, i) => (
              <div className="min-w-100">
                <img src={e.img} alt="" className="object-cover" />
                <div className="">
                  <h2 className="">{e.name}</h2>
                  <p className="text-gray-500 text-sm opacity-90">
                    {e.Description}
                  </p>
                  <h3 className="">${e.price}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderProductJordan;
