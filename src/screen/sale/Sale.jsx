import React from "react";
import Layout from "../../layout/Layout";
import LinkPage from "../../components/props/LinkPage";
import ListProducts from "../../components/sale/ListProducts";
const Sale = () => {
  return (
    <Layout>
      <LinkPage />
      <ListProducts />
    </Layout>
  );
};
export default Sale;
