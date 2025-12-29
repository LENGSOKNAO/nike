import React from "react";
import Banner from "../props/banner/Banner";
import { listBannerImage } from "../../model/ListBannerImage";
import banner1 from "../../assets/bannerHome/banner2.jpg";
import banner from "../../assets/bannerHome/banner1.jpg";

const dataBanner = [
  {
    image: banner1,
    title: "gits for every game",
    subTitle: "keep them feeling their best no matter move,",
    link: "",
    btnName: "Shop Gits",
  },
  {
    image: banner,
    title: "gits for every game",
    subTitle: "keep them feeling their best no matter move,",
    link: "",
    btnName: "Shop Gits",
  },
];

const BanneWomen = () => {
  return (
    <div>
      <Banner data={dataBanner} />
    </div>
  );
};

export default BanneWomen;
