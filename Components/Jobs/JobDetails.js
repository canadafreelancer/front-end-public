import React, { useState } from "react";
import { BsCalendar2DateFill, BsFolder } from "react-icons/bs";
import styles from "../../styles/JobDetails.module.css";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import { HiLocationMarker } from "react-icons/hi";
import { CgBriefcase, CgCalendarDates } from "react-icons/cg";
import Modal from "../Modal/Modal";
import { useRouter } from "next/router";

function JobDetails({ jobData }) {
  const [showModal, setShowModal] = useState(false);

  //redirect user to login
  let router = useRouter();

  const redirect = () => {
    router.push("/register/login");
  };

  const {
    category,
    datePublished,
    freelanceType,
    employerDetails: { employer, memberSince, address, projectsPosted, hired },
    projectDetails: { projectDuration, bids, desc, skillsReq, budget },
  } = jobData;

  const skills = skillsReq.map((skill) => <li key={skill}>{skill}</li>);
  return (
    <>
      <HeaderBanner props={jobData.caption} />

      <div className={styles["jobDetails__container"]}>
        <div className={styles["jobDetails_subCaption"]}>
          <div className={styles["jobDetails__category"]}>
            <BsFolder />
            <p>{category}</p>
          </div>
          <div className={styles["jobDetails__category"]}>
            <BsCalendar2DateFill />
            <p>{datePublished}</p>
          </div>
        </div>
        <h2>{jobData.caption}</h2>
        <div className={styles["jobDetails__content"]}>
          <section className={styles["jobDetails__main"]}>
            <div className={styles["jobDetails__highlights"]}>
              <p className={styles["jobDetails__highlights--seller"]}>
                Seller Type: <span>{freelanceType}</span>
              </p>
              <p className={styles["jobDetails__highlights--dur"]}>
                Duration: <span>{projectDuration}</span>
              </p>
              <p className={styles["jobDetails__highlights--bid"]}>
                Submitted Bids: <span>{bids}</span>
              </p>
            </div>
            <article className={styles["jobDetails__project"]}>
              <h2>About the project</h2>
              <p>{desc}</p>
              <div className={styles["jobDetails__skills"]}>
                <h3>Skills Required</h3>
                <ul>{skills}</ul>
              </div>
            </article>
          </section>
          <aside className={styles["jobDetails_aside"]}>
            {/* Side content */}
            <section className={styles["aside_caption"]}>
              <h2>Budget</h2>
              <p>{`$ ${budget.toFixed(2)}`}</p>
              <p>Project Type: Fixed</p>
            </section>
            <div className={styles["aside_btn"]}>
              <button onClick={() => setShowModal(true)}>
                Submit a proposal
              </button>
              <button onClick={() => setShowModal(true)}>
                Wishlist Project
              </button>
            </div>
            <section className={styles["aside_employerDetails"]}>
              <h2>About Employer</h2>
              <div className={styles["aside__highlights"]}>
                <div>
                  <p>
                    <CgBriefcase /> Company:
                  </p>
                </div>
                <div>
                  <p className={styles["aside_content"]}>{employer}</p>
                </div>
              </div>
              <div className={styles["aside__highlights"]}>
                <div>
                  <p>
                    <CgCalendarDates />
                    Member since:
                  </p>
                </div>
                <div>
                  <p className={styles["aside_content"]}>{memberSince}</p>
                </div>
              </div>
              <div className={styles["aside__highlights"]}>
                <div>
                  <p>
                    <HiLocationMarker />
                    Current Location:
                  </p>
                </div>
                <div>
                  <p className={styles["aside_content"]}>{address}</p>
                </div>
              </div>
              <div className={styles["aside__highlights"]}>
                <div>
                  <p>
                    <CgBriefcase />
                    Project Posted:
                  </p>
                </div>
                <div>
                  <p className={styles["aside_content"]}>{projectsPosted}</p>
                </div>
              </div>
              <div className={styles["aside__highlights"]}>
                <div>
                  <p>
                    <CgBriefcase />
                    Freelancers Hired:
                  </p>
                </div>
                <div>
                  <p className={styles["aside_content"]}>{hired}</p>
                </div>
              </div>
              <button className={styles["aside_btnContact"]}>
                Contact Seller
              </button>
            </section>
          </aside>
        </div>
      </div>
      {/* Show modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className={styles["modalContent__container"]}>
          <h3>You must be logged in first</h3>
          <button
            className={styles["modalContent__btnLogin"]}
            onClick={redirect}>
            Login
          </button>
        </div>
      </Modal>
    </>
  );
}

export default JobDetails;
