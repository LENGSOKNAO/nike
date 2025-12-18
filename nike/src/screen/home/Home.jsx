import React from "react";
import Layout from "../../layout/Layout";
import HomeBanner from "../../components/home/HomeBanner";
import GridBannerTow from "../../components/home/GridBannerTow";
import GridBannerTree from "../../components/home/GridBannerTree";
import SportLight from "../../components/home/SportLight";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <GridBannerTow />
      <GridBannerTree />
      <SportLight />
    </Layout>
  );
};

export default Home;