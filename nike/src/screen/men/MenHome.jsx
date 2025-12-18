import Layout from "../../layout/Layout";
import React from "react";
import MenBar from "../../components/men/MenBar";
import HeaderMen from "../../components/men/HeaderMen";
import SportMen from "../../components/men/SportMen";
// import Test from "../../components/men/test";
const MenHome = () => {
  return (
    <Layout>
      <MenBar />
      <HeaderMen />
      <SportMen />
      {/* <Test /> */}
    </Layout>
  );
};

export default MenHome;
