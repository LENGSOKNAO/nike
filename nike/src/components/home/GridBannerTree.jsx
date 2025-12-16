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
    <div className="flex justify-center">
      <div className="flex items-center gap-3 px-[1%] py-20 overflow-x-scroll">
        {listData.map((e, i) => (
          <div key={i}>
            <div className="w-150 ">
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
