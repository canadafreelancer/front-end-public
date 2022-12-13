import React from "react";
import MusicDetails from "../../../Components/Categories/MusicAudio/MusicDetails";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

function allMusicCat() {
  return listings.filter((list) => list.category === "Music & Audio");
}

//get all ids from category
function getAllMusicIds() {
  return allMusicCat().map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

// //get  data
function getMusicData(id) {
  return listings.find((job) => job.id === parseInt(id));
}

export async function getStaticPaths() {
  // return a list of possible value of id
  const paths = getAllMusicIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch necessary data using the  params.id
  const data = getMusicData(params.id);

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
        <MusicDetails data={data} />
      </Layout>
    </>
  );
}

export default Details;
