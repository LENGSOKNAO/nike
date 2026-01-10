import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const SliderProductJordan = () => {
  return (
    <>
      <div className="hidden sm:block relative h-full mx-10">
        <div className="  flex justify-between  w-auto  h-40">
          <h1 className="mt-5 text-2xl uppercase">popular rigth now </h1>
          <div className="absolute bottom-5 right-0 w-full">
            <ul className="flex justify-end  ">
              <li>View All</li>
              <li>
                <GrPrevious />
              </li>
              <li>
                <GrNext />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderProductJordan;
