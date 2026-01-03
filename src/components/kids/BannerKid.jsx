import React from "react";
import kidBanner1 from "../../assets/menpicsey/kidpic/kidbanner1.jpg";
import kidBanner2 from "../../assets/menpicsey/kidpic/kidbanner2.jpg";
import Banner from "../props/banner/Banner";

const imgesBanner = [
  {
    image: kidBanner1,
    title: "gits for every game",
    subTitle: "keep them feeling their best no matter move,",
    link: "",
    btnName: "Shop Gits",
  },

  {
    image: kidBanner2,
    title: "gits for every game",
    subTitle: "keep them feeling their best no matter move,",
    link: "",
    btnName: "Shop Gits",
  },
];

const BannerKid = () => {
  return (
    <div>
      <Banner data={imgesBanner} />
    </div>
  );
};

export default BannerKid;
