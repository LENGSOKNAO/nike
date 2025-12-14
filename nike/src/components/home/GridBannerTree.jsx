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
    <div className="grid grid-cols-3 gap-2  px-[2%] py-20 ">
      {listData.map((e, i) => (
        <div key={i}>
          <BannerCart
            image={e.image}
            nameBtn={e.btn}
            bigText={e.title}
            smallText={e.subTitile}
          />
        </div>
      ))}
    </div>
  );
};

export default GridBannerTree;
