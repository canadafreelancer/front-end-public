import React from "react";
import LifestyleDetails from "../../../Components/Categories/Lifestyle/LifestyleDetails";
// import MusicDetails from "../../../Components/Categories/MusicAudio/MusicDetails";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function allLifestyleCat() {
  return listings.filter((list) => list.category === "Lifestyle");
}

//get all ids from category
function getAllLifestyleIds() {
  return allLifestyleCat().map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

// //get  data
function getLifestyleData(id) {
  return listings.find((job) => job.id === parseInt(id));
}

export async function getStaticPaths() {
  // return a list of possible value of id
  const paths = getAllLifestyleIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch necessary data using the  params.id
  const data = getLifestyleData(params.id);

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
        <LifestyleDetails data={data} />
      </Layout>
    </>
  );
}

export default Details;
