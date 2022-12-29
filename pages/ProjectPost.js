import React from "react";
import FormPlate from "../Components/ProjectPost/FormPlate";
import Footer from "../components/Footer/Footer";
import Layout from "../Components/LayoutWrapper/Layout";
import HeaderBanner from "../Components/HeaderBanner/HeaderBanner";

function ProjectPost() {
  return (
    <>
      <Layout>
        <HeaderBanner props="Post A Project" />
        <FormPlate />
        <Footer />
      </Layout>
    </>
  );
}

export default ProjectPost;
