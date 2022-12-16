import React from "react";
import DesignDetails from "../../../Components/Categories/Design/DesignDetail";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function allDesignCat() {
  return listings.filter((list) => list.category === "Design & Creatives");
}

//get all ids from category
function getAllDesignIds() {
  return allDesignCat().map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

// //get  data
function getDesignData(id) {
  return listings.find((job) => job.id === parseInt(id));
}

export async function getStaticPaths() {
  // return a list of possible value of id
  const paths = getAllDesignIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch necessary data using the  params.id
  const data = getDesignData(params.id);

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
        <DesignDetails data={data} />
      </Layout>
    </>
  );
}

export default Details;
