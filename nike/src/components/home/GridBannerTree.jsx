import React from "react";
import BannerCart from "../props/cart/BannerCart";

const GridBannerTree = () => {
  const listData = [
    {
      image: "/src/assets/bannerHome/g.jpg",
      title: "",
      subTitile: "",
      btn: "Shop FootBall",
      Link: "",
    },
    {
      image: "/src/assets/bannerHome/nike.jpg",
      title: "",
      subTitile: "",
      btn: "Shop Basketball",
      Link: "",
    },
    {
      image: "/src/assets/bannerHome/sl.jpg",
      title: "",
      subTitile: "",
      btn: "Shop Running",
      Link: "",
    },
  ];
  return (
    <div className=" py-20 ">
      <div className="lg:grid grid-cols-3 flex items-center gap-3 px-[1%] overflow-x-scroll lg:overflow-hidden">
        {listData.map((e, i) => (
          <div key={i}>
            <div className="w-110 lg:w-full">
              <BannerCart
                image={e.image}
                nameBtn={e.btn}
                bigText={e.title}
                smallText={e.subTitile}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBannerTree;
