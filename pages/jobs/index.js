import React from "react";
import jobListings from "../../utils/jobListings.js";
import Layout from "../../Components/LayoutWrapper/Layout";
import JobListings from "../../Components/Jobs/JobListings.js";

export async function getStaticProps() {
  const allJobsData = jobListings;
  return {
    props: {
      allJobsData,
    },
  };
}

function Jobs({ allJobsData }) {
  return (
    <>
      <Layout>
        <JobListings allJobsData={allJobsData} />
      </Layout>
    </>
  );
}

export default Jobs;
