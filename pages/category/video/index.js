import React from "react";
import Videos from "../../../Components/Categories/Video/Videos";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function getAllVideos() {
  return listings.filter((list) => list.category === "Video & Animation");
}

export function getStaticProps() {
  //fetch all video and animation categories
  const allVideoCat = getAllVideos();
  return {
    props: {
      allVideoCat,
    },
  };
}

function Video({ allVideoCat }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <Videos allVideoCat={allVideoCat} />
      </Layout>
    </>
  );
}

export default Video;
