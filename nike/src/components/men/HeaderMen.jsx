import React from "react";

const HeaderMen = () => {
  return (
    <header className=" mt-5 p-5 place-items-center ">
      <div className="flex flex-col gap-3  items-center">
        <h4>LeBron XXIII</h4>
        <h1 className="text-5xl  font-Sekuya"> FOREVER KING</h1>
        <p>There can only be one crown.</p>
        <button className="w-[80px] h-[40px] bg-black text-white rounded-full">
          Shop
        </button>
      </div>
    </header>
  );
};

export default HeaderMen;
