import React from "react";
import Layout from "../../layout/Layout";
import BanneWomen from "../../components/women/BanneWomen";

import ListWomen from "../../components/women/ListWomen";
import BannerTow from "../../components/women/BannerTow";
import WomenBannerTow from "../../components/women/WomenBannerTow";
import TrainingWomen from "../../components/women/TrainingWomen";
import ShopByColorWomen from "../../components/women/ShopByColorWomen";
import SportLight from "../../components/home/SportLight";

const WomenHome = () => {
  return (
    <Layout>
      <ListWomen />
      <BanneWomen />
      <BannerTow />
      <TrainingWomen />
      <WomenBannerTow />
      <ShopByColorWomen />
      <SportLight />
    </Layout>
  );
};

export default WomenHome;
