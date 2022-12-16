import React from "react";
import WritingDetails from "../../../Components/Categories/Writing/WritingDetails";
import HeaderBanner from "../../../Components/HeaderBanner/HeaderBanner";
import Layout from "../../../Components/LayoutWrapper/Layout";
import listings from "../../../utils/Listings";

// const allWritingCat = (){
//   return listings.filter((list) => list.category === "Writing & Translation");
// };
function allWritingCat() {
  return listings.filter((list) => list.category === "Writing & Translation");
}

//get all ids from category
function getAllWritingIds() {
  return allWritingCat().map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

// //get  data
function getWritingData(id) {
  return listings.find((job) => job.id === parseInt(id));
}

export async function getStaticPaths() {
  // return a list of possible value of id
  const paths = getAllWritingIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch necessary data using the  params.id
  const data = getWritingData(params.id);

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
        <WritingDetails data={data} />
      </Layout>
    </>
  );
}

export default Details;
