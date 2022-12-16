import React from "react";
import BusinessListing from "../../../Components/Categories/Business/BusinessListings";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function getAllBusiness() {
  return listings.filter((list) => list.category === "Business");
}

export function getStaticProps() {
  //fetch all business categories
  const allBusinessCat = getAllBusiness();
  return {
    props: {
      allBusinessCat,
    },
  };
}

function Business({ allBusinessCat }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <BusinessListing allBusinessCat={allBusinessCat} />
      </Layout>
    </>
  );
}

export default Business;
