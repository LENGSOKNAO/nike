import React from "react";
import imgFt1 from "../../assets/menpicsey/jordan/Jordan1.jpg";
import imgFt2 from "../../assets/menpicsey/jordan/Jordan2.jpg";
import { Key } from "lucide-react";
import { Link } from "react-router";

const Ft1 = [
  { imges: imgFt1, nameBtn: "Shop", Desc: "Brooklyn Fleece" },
  { imges: imgFt2, nameBtn: "Shop", Desc: "Jordan Basketball" },
];

const Feature1 = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-xl m-5 px-2.5 font-medium text-white uppercase sm:px-5">
          Jordan Gear
        </h1>
        <div className="w-full h-full sm:grid sm:grid-cols-2 overflow-hidden ">
          {Ft1.map((e, i) => (
            <div key={i} className="relative ">
              <div>
                <img
                  src={e.imges}
                  alt=""
                  className="w-full h-full  object-cover"
                />
              </div>
              <div className="absolute text-lg bottom-5 left-10 sm:bottom-10">
                <h2 className=" p-1">{e.Desc}</h2>
                <div className="bg-white text-black place-items-center text-center m-2 p-1 w-20 h-10  rounded-full cursor-pointer hover:bg-gray-300 ">
                  <Link to="">{e.nameBtn}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature1;
