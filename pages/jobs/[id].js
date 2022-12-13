import React from "react";
import JobDetails from "../../Components/Jobs/JobDetails";
import Layout from "../../Components/LayoutWrapper/Layout";
import jobListings from "../../utils/jobListings";

//get all ids
function getAllJobIds() {
  return jobListings.map((job) => {
    return {
      params: {
        id: job.id.toString(),
      },
    };
  });
}

//get job data
function getJobData(id) {
  return jobListings.find((job) => job.id === parseInt(id));
}

export async function getStaticPaths() {
  // return a list of possible value of id
  const paths = getAllJobIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  //fetch necessary data using the  params.id
  const data = getJobData(params.id);

  return {
    props: {
      jobData: data,
    },
  };
}
function Details({ jobData }) {
  return (
    <>
      <Layout>
        <JobDetails jobData={jobData} />
      </Layout>
    </>
  );
}

export default Details;
