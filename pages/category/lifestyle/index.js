import React from "react";
import LifestyleListing from "../../../Components/Categories/Lifestyle/LifestyleListing";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function getAllLifestyle() {
  return listings.filter((list) => list.category === "Lifestyle");
}

export function getStaticProps() {
  //fetch all lifestyle categories
  const allLifestyleCat = getAllLifestyle();
  return {
    props: {
      allLifestyleCat,
    },
  };
}

function Lifestyle({ allLifestyleCat }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <LifestyleListing allLifestyleCat={allLifestyleCat} />
      </Layout>
    </>
  );
}

export default Lifestyle;
