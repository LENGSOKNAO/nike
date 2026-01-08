import React from "react";
import Banner from "../props/banner/Banner";
import B1 from "../../assets/bannerHome/banner1.jpg";
import B3 from "../../assets/bannerHome/banner3.jpg";

const imges = [{ image: B1 }, { image: B3 }];

const SlideJordan = () => {
  return (
    <div>
      <Banner data={imges} />
      <div className=" mt-10 p-5 place-items-center ">
        <div className="flex flex-col gap-3  items-center">
          <h4>Luka 5</h4>
          <h1 className="text-3xl  font-Sekuya uppercase sm:text-5xl">
            Bad Luka, Nice Shoes
          </h1>
          <p>360° Control. Full-Length Zoom. Nice Shoes.</p>
          <button className="w-25 h-9  bg-white text-black rounded-full">
            Get Notified
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideJordan;
