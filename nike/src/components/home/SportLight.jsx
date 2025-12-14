import React from "react";
import BigText from "../props/text/BigText";
import SmallText from "../props/text/SmallText";
import { listDataShortLight } from "../../model/DataShortLight";

const SportLight = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center ">
        <BigText text="SORTLIGHT" />
        <div className="py-5">
          <SmallText text="Classic silhouettes and cutting-edge innovation to build your game from the ground up." />
        </div>
        <div className="grid grid-cols-8 gap-x-25 gap-y-10 place-items-top mt-15 ">
          {listDataShortLight.map((e, i) => (
            <div className="w-18 text-center cursor-pointer" key={i}>
              <img src={e.image} className=" object-cover " alt="" />
              <p className="text-[12px] font-bold hover:text-gray-600 py-2">
                {" "}
                {e.title}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportLight;
