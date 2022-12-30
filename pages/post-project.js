import React from "react";
import FormPlate from "../Components/ProjectPost/FormPlate";
import Layout from "../Components/LayoutWrapper/Layout";
import HeaderBanner from "../Components/HeaderBanner/HeaderBanner";

function ProjectPost() {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <FormPlate />
      </Layout>
    </>
  );
}

export default ProjectPost;
