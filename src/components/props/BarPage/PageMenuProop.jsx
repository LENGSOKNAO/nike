import React from "react";
import { Link } from "react-router";

const PageMenuProop = ({ nav1, nav2 }) => {
  return (
    <>
      <div className=" lg:flex  h-20 w-100% items-center text-xl font-medium px-2 cursor-pointer overflow-hidden sm:px-10">
        <div className=" h-a w-[35%] flex justify-start mb-2">
          <Link to="">{nav1}</Link>
        </div>
        <div className="w-full hide-scrollbar-x lg:w-[65%] overflow-x-auto lg:overflow-x-visible   ">
          <ul className="flex gap-x-10 font-medium text-lg whitespace-nowrap">
            {nav2.map((e, i) => (
              <li key={i}>{e.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PageMenuProop;
