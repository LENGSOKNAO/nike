import React from "react";
import bann from "../../assets/bannerHome/bann.jpg";
import ba2 from "../../assets/bannerHome/ba2.jpg";
import BannerTowProp from "../props/banner/BannerTowProp";

const BannerTow = () => {
  const listData = [
    {
      image: bann,
      title: "Unleash Your Powser",
      subTitile: "Nike x Stranger Things",
      btn: "Shop",
      Link: "",
    },
    {
      image: ba2,
      title: "Low Light, Hight Voltage",
      subTitile: "Air jordan 11 'Gamma'",
      btn: "Shop",
      Link: "",
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2">
        {listData.map((e, i) => (
          <BannerTowProp
            img={e.image}
            sub={e.subTitile}
            ti={e.title}
            nameBtn={e.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerTow;
