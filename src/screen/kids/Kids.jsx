import KidsHome from "../../components/kids/KidsHome";
import Layout from "../../layout/Layout";
import React from "react";
import BannerKid from "../../components/kids/BannerKid";
import FeatureKId from "../../components/kids/FeatureKId";
import FeatureKid2 from "../../components/kids/FeatureKid2";

const Kids = () => {
  return (
    <Layout>
      <KidsHome />
      <BannerKid />
      <FeatureKId />
      <FeatureKid2 />
    </Layout>
  );
};

export default Kids;
