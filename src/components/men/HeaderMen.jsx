import React from "react";
import ImgBanner from "../../assets/bannerHome/banner1.jpg";

const HeaderMen = () => {
  return (
    <header>
      <div className="">
        <img className="h-auto w-full overflow-hidden" src={ImgBanner} alt="" />
      </div>
      <div className=" mt-5 p-5 place-items-center ">
        <div className="flex flex-col gap-3  items-center">
          <h4>LeBron XXIII</h4>
          <h1 className="text-3xl  font-Sekuya uppercase sm:text-5xl">
            forever king
          </h1>
          <p>There can only be one crown.</p>
          <button className="w-[80px] h-[40px] bg-black text-white rounded-full">
            Shop
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderMen;
