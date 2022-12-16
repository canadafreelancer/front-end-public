import React from "react";
import MusicListing from "../../../Components/Categories/MusicAudio/MusicListings";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function getAllMusic() {
  return listings.filter((list) => list.category === "Music & Audio");
}

export function getStaticProps() {
  //fetch all music and audio categories
  const allMusicCat = getAllMusic();
  return {
    props: {
      allMusicCat,
    },
  };
}

function Music({ allMusicCat }) {
  return (
    <>
      <Layout>
        <HeaderBanner />
        <MusicListing allMusicCat={allMusicCat} />
      </Layout>
    </>
  );
}

export default Music;
