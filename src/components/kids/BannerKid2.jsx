import React from "react";
import Imge from "../../assets/menpicsey/kidpic/bannerKid2/banner1.jpg";

const BannerKid2 = () => {
  return (
    <>
      <div className="">
        <h1 className="m-5 px-0.5 sm:px-5 text-xl font-medium sm:text-3xl ">
          Best Sellers
        </h1>
        <div className="place-items-center ">
          <img
            src={Imge}
            alt=""
            className="w-full max-h-155 overflow-hidden lg:w-[60%] "
          />
        </div>
      </div>
    </>
  );
};

export default BannerKid2;
