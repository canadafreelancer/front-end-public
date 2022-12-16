import React from "react";
import Writings from "../../../Components/Categories/Writing/Writings";
// import WritingTranslation from "../../../Components/Categories/Writing/WritingTranslation";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function getAllWriting() {
  return listings.filter((list) => list.category === "Writing & Translation");
}

export function getStaticProps() {
  //fetch all writing and translation categories
  const allWritingCat = getAllWriting();
  return {
    props: {
      allWritingCat,
    },
  };
}

function Writing({ allWritingCat }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <Writings allWritingCat={allWritingCat} />
      </Layout>
    </>
  );
}

export default Writing;
