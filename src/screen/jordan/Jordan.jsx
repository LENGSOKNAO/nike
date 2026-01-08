import React from "react";
import Layout from "../../layout/Layout.jsx";
import LinkPage from "../../components/props/LinkPage.jsx";
import NavbarJordan from "../../components/jordan/NavbarJordan.jsx";
import SlideJordan from "../../components/jordan/SlideJordan.jsx";

const Jordan = () => {
  return (
    <div className="">
      <Layout bg={true} text={"text-white"}>
        <LinkPage color={true} />
        <div className="bg-jordan w-full h-auto text-white">
          <NavbarJordan />
          <SlideJordan />
        </div>
      </Layout>
    </div>
  );
};

export default Jordan;
