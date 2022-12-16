import React from "react";
import TechProg from "../../../Components/Categories/TechProgramming/TechProg";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function getAllTech() {
  return listings.filter((list) => list.category === "Tech & Programming");
}

export function getStaticProps() {
  //fetch all tech and programming categories
  const allTechCat = getAllTech();
  return {
    props: {
      allTechCat,
    },
  };
}

function Tech({ allTechCat }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <TechProg allTechCat={allTechCat} />
      </Layout>
    </>
  );
}

export default Tech;
