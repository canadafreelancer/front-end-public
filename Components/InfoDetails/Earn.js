import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/InfoDetails.module.css";

function Earn() {
  return (
    <>
      <div className={styles["earn__container"]}>
        <div className={styles["earn__content"]}>
          <Image
            src={`https://source.unsplash.com/B6JINerWMz0`}
            width={600}
            height={400}
          />
        </div>
        <div className={styles["earn__content"]}>
          <section className={styles["earn__body"]}>
            <h2>How to get started</h2>
            <ul className={styles["earn__items"]}>
              <li>
                <h3>1. Complete your profile</h3>
                <p>
                  Enter your details, upload your profle and select your skill
                  set
                </p>
              </li>
              <li>
                <h3>2. Comb through jobs</h3>
                <p>
                  Browse through numerous available jobs and select on that
                  suits your skills
                </p>
              </li>
              <li>
                <h3>3. Submit proposal</h3>
                <p>
                  Thoroughly understand the job requirement and submit your
                  proposal
                </p>
              </li>
              <li>
                <h3>4. Get Awarded and Earn </h3>
                <p>
                  Get hired, deliver high quality work and earn the agreed
                  amount.
                </p>
              </li>
            </ul>
            <Link href="/jobs">
              <button className={styles["earn__btn"]}>Browse Jobs</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default Earn;
