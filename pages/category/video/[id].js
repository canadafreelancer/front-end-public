import React from "react";
import VideoDetails from "../../../Components/Categories/Video/VideoDetails";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function allVideoCat() {
  return listings.filter((list) => list.category === "Video & Animation");
}

//get all ids from category
function getAllVideoIds() {
  return allVideoCat().map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

// //get  data
function getVideoData(id) {
  return listings.find((job) => job.id === parseInt(id));
}

export async function getStaticPaths() {
  // return a list of possible value of id
  const paths = getAllVideoIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch necessary data using the  params.id
  const data = getVideoData(params.id);

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
        <VideoDetails data={data} />
      </Layout>
    </>
  );
}

export default Details;
