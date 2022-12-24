import React from "react";
import styles from "../../styles/InfoDetails.module.css";
import { GrWorkshop, GrUserExpert } from "react-icons/gr";
import { BsCashStack } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function Hire() {
  return (
    <>
      <section className={styles["content__container"]}>
        <div className={styles["Hire__content--heading"]}>
          <h2>A Wide range of approved Freelancers</h2>
          <p>Numerous Freelancers to help you turn your idea into reality </p>
        </div>
        <div className={styles["Hire__snippets"]}>
          <div className={styles["Hire__snippets--item"]}>
            <GrWorkshop className={styles["Hire__icon"]} />
            <h3>No job too small</h3>
            <p>We get it done. From small one-off tasks to large projects</p>
          </div>
          <div className={styles["Hire__snippets--item"]}>
            <BsCashStack className={styles["Hire__icon"]} />
            <h3>Flexible Payment terms</h3>
            <p>Pay Frelelancers per hour or a fixed budget</p>
          </div>
          <div className={styles["Hire__snippets--item"]}>
            <GrUserExpert className={styles["Hire__icon"]} />
            <h3>Localized Talents</h3>
            <p>Choose from expert Freelancers dotted all around Canada</p>
          </div>
        </div>
        {/*  How it works */}
        <section className={styles["Hire__details"]}>
          <div className={styles["Hire__details--item"]}>
            {/* image */}
            <Image
              src={`https://source.unsplash.com/VuVPkQG9XpY`}
              width={600}
              height={400}
            />
          </div>
          <div className={styles["Hire__details--item"]}>
            <article className={styles["Hire__body"]}>
              <h2>How It Works</h2>
              <ul className={styles["Hire__body--content"]}>
                <li>
                  <h3>1. Post a project </h3>
                  <p>
                    Click on the "Post a project" button, provide a brief
                    description of the work to be done, and receive competitive
                    bids from Hires
                  </p>
                </li>
                <li>
                  <h3>2. Select the prefered Hire</h3>
                  <p>
                    Browse numerous Freelancer profiles, connect with the
                    prefered Freelancer, award your project and see your idea
                    comes to life
                  </p>
                </li>
                <li>
                  <h3>3. Pay Upon Completion</h3>
                  <p>
                    Review your the work, and release payment when the the task
                    has been completed and you are truly satisfied
                  </p>
                </li>
              </ul>
              <Link href="/post">
                <button className={styles["Hire__btn"]}>Post a project</button>
              </Link>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}

export default Hire;
