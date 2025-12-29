import React from "react";
import img from "../../assets/bannerHome/banner2.jpg";
import { Link } from "react-router";

const MenBar2 = () => {
  return (
    <div className="mt-20">
      <h1 className="p-5 font-medium text-2xl sm:px-10">Give Sport</h1>

      <div className="relative w-full h-[450px]">
        {/* Image */}
        <img
          src={img}
          alt="Sport gifts banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center text-white px-5 sm:bottom-5">
          <div className="text-center max-w-xxl">
            <h2 className="uppercase text-4xl sm:text-5xl font-Sekuya">
              Gifts That Got Game
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              vitae.
            </p>

            <div className="m-5">
              <Link
                to="/shop"
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
              >
                Shop Gifts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenBar2;
