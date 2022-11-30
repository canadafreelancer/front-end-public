import React, { useState, useEffect } from "react";
import jobs from "../../utils/jobListings";
import styles from "../../styles/JobListings.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import SearchFilters from "./SearchFilters";
import HeaderImage from "../HeaderImage/HeaderImage";
import NavBar from "../Nav/NavBar";

function JobsListing() {
  const [jobListing, setJobListing] = useState(jobs);
  const [checkedCat, setCheckedCat] = useState([]);
  const [jobType, setJobType] = useState([]);

  useEffect(() => {
    // showJobs(jobs);
  }, []);
  //show checked cateogry
  const handleCategory = (cat) => {
    const currentIndex = checkedCat.indexOf(cat);
    const newCheckedCat = [...checkedCat];

    if (currentIndex === -1) {
      newCheckedCat.push(cat);
    } else {
      newCheckedCat.splice(currentIndex, 1);
    }
    setCheckedCat(newCheckedCat);
  };

  //show checked freelance type
  const handleFreelanceType = (type) => {
    const currentIndex = jobType.indexOf(type);
    const newJobType = [...jobType];

    if (currentIndex === -1) {
      newJobType.push(type);
    } else {
      newJobType.splice(currentIndex, 1);
    }
    setJobType(newJobType);
  };

  //handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    // console.log("submitting form");
    // console.log(checkedCat, jobType);
    showJobs(jobs);
  };

  const showJobs = (jobs) => {
    const result = [];
    jobs.forEach((job) => {
      checkedCat.forEach((cat) => {
        if (job.category === cat) {
          // console.log(job);
          result.push(job);
        }
      });
    });
    console.log(result);
    if (result.length >= 1) {
      setJobListing(result);
    } else {
      return;
    }
  };

  const listings = jobListing.map((job) => {
    const { id, caption, employerDetails, projectDetails, category } = job;
    return (
      <li key={id}>
        <section>
          <h3 className={styles["jobRequest_title"]}>{caption}</h3>
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
            <button className={styles["jobRequest_btn"]}>View Details</button>
          </div>
        </section>
      </li>
    );
  });

  return (
    <>
      <NavBar />
      <div className={styles["header-image__container"]}>
        <HeaderImage />
        <div className={styles["header_text"]}>Projects</div>
      </div>
      <div className={styles["jobListing_container"]}>
        <aside className={styles["jobListing_container__sidebar"]}>
          <section className={styles["sidebar"]}>
            <SearchFilters
              checkedCat={checkedCat}
              jobType={jobType}
              handleCategory={handleCategory}
              handleFreelanceType={handleFreelanceType}
              handleFormSubmission={handleFormSubmission}
            />
          </section>
        </aside>
        <div className={styles["jobListing_container__main"]}>
          <section>
            <ul className={styles["jobRequests"]}>{listings}</ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default JobsListing;
