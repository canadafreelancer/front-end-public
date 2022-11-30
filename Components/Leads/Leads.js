import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import styles from "../../styles/Leads.module.css";

function Leads() {
  return (
    <>
      <div className={styles["leads-wrapper"]}>
        <section
          className={`${styles["leads-wrapper-col"]} ${styles["leads-col__employer"]}`}>
          <h2>Looking for talent ? Post your project</h2>
          <div className={styles["leads_content"]}>
            <p>
              A plethora of experienced Freelancers living in Canada are
              searching for work. Post your project and accept bids from
              numerous freelancer willing to work, and swiftly get your project
              developed from our creative community.
            </p>
            <button className={styles["leads_btn-employer"]}>
              Join as an employer
              <BsChevronDoubleRight className={styles["leads-icon"]} />
            </button>
          </div>
        </section>
        <section
          className={`${styles["leads-wrapper-col"]} ${styles["leads-col__freelancer"]}`}>
          <h2>Want work? Start as a freelancer</h2>
          <div className={styles["leads_content"]}>
            <p>
              Thousands of entrepreneurs and corporate companies are looking for
              remote Freelancers living in Canada. Find unlimited clients and
              build your freelance career,whilst earning at your convenience.
            </p>
            <button className={styles["leads_btn-freelancer"]}>
              Join as a freelancer
              <BsChevronDoubleRight className={styles["leads-icon"]} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Leads;
