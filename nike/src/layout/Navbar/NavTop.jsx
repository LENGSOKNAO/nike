import React from "react";
import { listFooter } from "../../model/ListFooter";

const NavTop = () => {
  return (
    <nav className="hidden lg:block">
      <div className="bg-gray-200 px-[1%] py-2">
        <div className="flex justify-end   ">
          {listFooter.map((e, i) => (
            <div
              key={i}
              className={`flex items-center justify-center ${
                i === 0
                  ? ""
                  : "before:content-[''] before:block before:w-[1px] before:h-3  before:bg-black"
              }`}
            >
              <p className="text-[14px] font-semibold px-2">{e.title} </p>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
