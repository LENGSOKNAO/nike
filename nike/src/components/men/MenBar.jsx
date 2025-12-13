import React from "react";
import { Link } from "react-router";

const MenList = [
  { name: "Shoes", Link: "" },
  { name: "Clothing", Link: "" },
  { name: "Accessories", Link: "" },
];

const MenBar = () => {
  return (
    <>
      <div className="flex  h-20 w-100% items-center text-xl font-medium">
        <div className=" h-a w-[40%] flex justify-start   px-10">
          <ul>
            <Link to="">
              <li>Men</li>
            </Link>
          </ul>
        </div>
        <div className=" h-auto w-[60%] ">
          <ul className="flex gap-x-20 ">
            {MenList.map((e, i) => (
              <li>{e.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenBar;
