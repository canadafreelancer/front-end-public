import React from "react";
import SalesDetails from "../../../Components/Categories/Sales/SalesDetails";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function allSalesCat() {
  return listings.filter((list) => list.category === "Sales & Marketting");
}

//get all ids from category
function getAllSalesIds() {
  return allSalesCat().map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

// //get  data
function getSalesData(id) {
  return listings.find((job) => job.id === parseInt(id));
}

export async function getStaticPaths() {
  // return a list of possible value of id
  const paths = getAllSalesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch necessary data using the  params.id
  const data = getSalesData(params.id);

  return {
    props: {
      data,
    },
  };
}

function Details({ data }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <SalesDetails data={data} />
      </Layout>
    </>
  );
}

export default Details;
