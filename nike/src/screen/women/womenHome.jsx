import React from "react";
import Layout from "../../layout/Layout";
import BanneWomen from "../../components/women/BanneWomen";
import LinkWomen from "../../components/women/LinkWomen";
import ListWomen from "../../components/women/ListWomen";
import BannerTow from "../../components/women/BannerTow";
import WomenBannerTow from "../../components/women/WomenBannerTow";
import TrainingWomen from "../../components/women/TrainingWomen";
import ShopByColorWomen from "../../components/women/ShopByColorWomen";

const WomenHome = () => {
  return (
    <Layout>
      <LinkWomen />
      <ListWomen />
      <BanneWomen />
      <BannerTow />
      <TrainingWomen />
      <WomenBannerTow />
      <ShopByColorWomen />
    </Layout>
  );
};

export default WomenHome;
