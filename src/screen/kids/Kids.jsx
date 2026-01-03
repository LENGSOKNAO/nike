import KidsHome from "../../components/kids/KidsHome";
import Layout from "../../layout/Layout";
import React from "react";
import BannerKid from "../../components/kids/BannerKid";

const Kids = () => {
  return (
    <Layout>
      <KidsHome />
      <BannerKid />
    </Layout>
  );
};

export default Kids;
