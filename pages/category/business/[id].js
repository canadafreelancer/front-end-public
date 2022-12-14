import React from "react";
import BusinessDetails from "../../../Components/Categories/Business/BusinessDetail";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function allBusinessCat() {
  return listings.filter((list) => list.category === "Business");
}

//get all ids from category
function getAllBusinessIds() {
  return allBusinessCat().map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

// //get  data
function getBusinessData(id) {
  return listings.find((job) => job.id === parseInt(id));
}

export async function getStaticPaths() {
  // return a list of possible value of id
  const paths = getAllBusinessIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch necessary data using the  params.id
  const data = getBusinessData(params.id);

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
        <BusinessDetails data={data} />
      </Layout>
    </>
  );
}

export default Details;
