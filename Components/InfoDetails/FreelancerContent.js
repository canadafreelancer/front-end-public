import React from "react";
import styles from "../../styles/InfoDetails.module.css";
import { GrWorkshop, GrUserExpert } from "react-icons/gr";
import { BsCashStack } from "react-icons/bs";
import Image from "next/image";

function FreelancerContent() {
  return (
    <>
      <section className={styles["content__container"]}>
        <div className={styles["Freelancer__content--heading"]}>
          <h2>A Wide range of approved Freelancers</h2>
          <p>Numerous Freelancers to help you turn your idea into reality </p>
        </div>
        <div className={styles["Freelancer__snippets"]}>
          <div className={styles["Freelancer__snippets--item"]}>
            <GrWorkshop className={styles["Freelancer__icon"]} />
            <h3>No job too small</h3>
            <p>We get it done. From small one-off tasks to large projects</p>
          </div>
          <div className={styles["Freelancer__snippets--item"]}>
            <BsCashStack className={styles["Freelancer__icon"]} />
            <h3>Flexible Payment terms</h3>
            <p>Pay Freelancers per hour or a fixed budget</p>
          </div>
          <div className={styles["Freelancer__snippets--item"]}>
            <GrUserExpert className={styles["Freelancer__icon"]} />
            <h3>Localized Talents</h3>
            <p>Choose from expert Freelancers dotted all around Canada</p>
          </div>
        </div>
        {/*  How it works */}
        <section className={styles["Freelancer__details"]}>
          <div className={styles["Freelancer__details--item"]}>
            {/* image */}
            <Image
              src={`https://source.unsplash.com/VuVPkQG9XpY`}
              width={600}
              height={400}
            />
          </div>
          <div className={styles["Freelancer__details--item"]}>
            <article>
              <h2>How It Works</h2>
              <ul>
                <li>
                  <h3>1.Post a project </h3>
                  <p>
                    Click on the "Post a project" button, provide a brief
                    description of the work to be done, and receive competitive
                    bids from Freelancers
                  </p>
                </li>
                <li>
                  <h3>2. Select the preffered Freelancer</h3>
                  <p>
                    Browse numerous Freelancer profiles, connect with the
                    prefered Freelancer, award your project and see your idea
                    comes to life
                  </p>
                </li>
                <li>
                  <h3>3.Pay Upon Completiion</h3>
                  <p>
                    Review your the work, and release payment when the the task
                    has been completed and you are truly satisfied
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}

export default FreelancerContent;
