import React from "react";
import DesignListing from "../../../Components/Categories/Design/DesignListings";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function getAllDesign() {
  return listings.filter((list) => list.category === "Design & Creatives");
}

export function getStaticProps() {
  //fetch all design categories
  const allDesignCat = getAllDesign();
  return {
    props: {
      allDesignCat,
    },
  };
}

function Lifestyle({ allDesignCat }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <DesignListing allDesignCat={allDesignCat} />
      </Layout>
    </>
  );
}

export default Lifestyle;
