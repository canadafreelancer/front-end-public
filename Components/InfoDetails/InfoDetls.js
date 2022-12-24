import React, { useState } from "react";
import styles from "../../styles/InfoDetails.module.css";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import FreelancerContent from "./FreelancerContent";
import EmployerContent from "./EmployerContent";

function InfoDetls() {
  const [activeTab, setActiveTab] = useState("tab1");

  // handle tab switching
  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <>
      <HeaderBanner />
      <div className={styles["tabs__container"]}>
        <ul className={styles["nav__container"]}>
          <li
            className={activeTab === "tab1" ? styles.active : ""}
            onClick={handleTab1}>
            <h3>How to hire a freelancer</h3>
          </li>
          <li
            className={activeTab === "tab2" ? styles.active : ""}
            onClick={handleTab2}>
            <h3>How to earn money freelancing</h3>
          </li>
        </ul>
        <div className={styles.outlet}>
          {/* content goes here */}
          {activeTab === "tab1" ? <FreelancerContent /> : <EmployerContent />}
        </div>
      </div>
    </>
  );
}

export default InfoDetls;
