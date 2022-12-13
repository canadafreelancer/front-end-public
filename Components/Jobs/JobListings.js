import React from "react";
import styles from "../../styles/JobListings.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import JobsFilter from "../SearchFilters/JobsFilter";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import Link from "next/link";

function JobListings({ allJobsData }) {
  //get number of jobs
  const jobsNum = allJobsData.length;

  // filter by categories
  function filterData() {
    const allCategories = allJobsData.map((job) => job.category);
    const uniqueCategories = new Set(allCategories);
    const arrCategories = Array.from(uniqueCategories);

    //filter by location
    const locations = allJobsData.map(
      ({ employerDetails }) => employerDetails.address
    );
    const uniqueLocation = new Set(locations);
    const arrLocation = Array.from(uniqueLocation);

    return {
      arrCategories,
      arrLocation,
    };
  }

  const listings = allJobsData.map((job) => {
    const { id, caption, employerDetails, projectDetails, category } = job;
    return (
      <li key={id}>
        <section>
          <h2 className={styles["jobRequest_title"]}>{caption}</h2>
          <div className={styles["jobRequest_owner"]}>
            <p>
              <span className={styles["jobRequest_icon"]}>
                <AiOutlineUser />
              </span>
              {employerDetails.employer}
            </p>
            <p>
              <span className={styles["jobRequest_icon"]}>
                <FaCanadianMapleLeaf />
              </span>
              {employerDetails.address}
            </p>
            <p>{category}</p>
          </div>

          <p
            className={styles["jobRequest_desc"]}>{`${projectDetails.desc.slice(
            0,
            200
          )}...`}</p>
          <div className={styles["jobRequest_duration"]}>
            <p>
              <span className={styles["jobRequest_days"]}>Duration</span>
              {projectDetails.projectDuration}
            </p>
            <p>
              {`${projectDetails.budget.toFixed(2)} USD`}{" "}
              <span className={styles["jobRequest_hourly"]}>Hourly</span>
            </p>
            <Link href={`/jobs/${id}`}>
              <button className={styles["jobRequest_btn"]}>View Details</button>
            </Link>
          </div>
        </section>
      </li>
    );
  });

  return (
    <>
      <section className={styles["jobListing__heading_container"]}>
        <HeaderBanner props="Job Listings" />
      </section>
      <section>
        <div className={styles["jobListing_container"]}>
          <aside className={styles["jobListing_container__sidebar"]}>
            <section className={styles["sidebar"]}>
              <JobsFilter filterData={filterData} />
            </section>
          </aside>
          <div className={styles["jobListing_container__main"]}>
            <section>
              <ul className={styles["jobRequests"]}>{listings}</ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobListings;
