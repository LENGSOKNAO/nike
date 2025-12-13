import Layout from "../../layout/Layout";
import React from "react";
import MenBar from "../../components/men/MenBar";
import HeaderMen from "../../components/men/HeaderMen";
import SportMen from "../../components/men/SportMen";

const MenHome = () => {
  return (
    <Layout>
      <MenBar />
      <HeaderMen />
      <SportMen />
    </Layout>
  );
};

export default MenHome;
