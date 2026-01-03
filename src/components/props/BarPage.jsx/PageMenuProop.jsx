import React from "react";
import { Link } from "react-router";

const PageMenuProop = ({ nav1, nav2 }) => {
  return (
    <>
      <div className=" lg:flex  h-20 w-100% items-center text-xl font-medium px-10 cursor-pointer overflow-hidden">
        <div className=" h-a w-[35%] flex justify-start mb-2">
          <Link to="">{nav1}</Link>
        </div>
        <div className=" h-auto w-full lg:w-[65%] ">
          <ul className="flex gap-x-10  ">
            {nav2.map((e, i) => (
              <li>{e.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PageMenuProop;
