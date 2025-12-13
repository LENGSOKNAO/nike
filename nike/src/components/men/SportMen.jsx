import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";

const SportMen = () => {
  return (
    <>
      <div className="flex justify-between px-20 mt-10">
        <h2>Shop by Sport </h2>
        <div className="flex gap-5 ">
          <iconbutton className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full ">
            <MdOutlineArrowBackIosNew />{" "}
          </iconbutton>
          <iconbutton className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full ">
            <GrNext />
          </iconbutton>
        </div>
      </div>
    </>
  );
};

export default SportMen;
