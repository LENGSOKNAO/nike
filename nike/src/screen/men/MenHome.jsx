import Layout from "../../layout/Layout";
import React from "react";
import MenBar from "../../components/men/MenBar";
import HeaderMen from "../../components/men/HeaderMen";
import SportMen from "../../components/men/SportMen";
import SportMen2 from "../../components/men/SportMen2";
import MenBar2 from "../../components/men/MenBar2";
// import Test from "../../components/men/test";
const MenHome = () => {
  return (
    <Layout>
      <MenBar />
      <HeaderMen />
      <SportMen />
      <SportMen2 />
      <MenBar2 />
      {/* <Test /> */}
    </Layout>
  );
};

export default MenHome;
