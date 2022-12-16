import React from "react";
import SalesListing from "../../../Components/Categories/Sales/SalesListings";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function getAllSales() {
  return listings.filter((list) => list.category === "Sales & Marketting");
}

export function getStaticProps() {
  //fetch all sales and marketting categories
  const allSalesCat = getAllSales();
  return {
    props: {
      allSalesCat,
    },
  };
}

function Sales({ allSalesCat }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <SalesListing allSalesCat={allSalesCat} />
      </Layout>
    </>
  );
}

export default Sales;
