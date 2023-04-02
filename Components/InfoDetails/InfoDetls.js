import React, { useState } from "react";
import styles from "../../styles/InfoDetails.module.css";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import Hire from "./Hire";
import Earn from "./Earn";

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
      <HeaderBanner props="How it works" />
      <div>
        <ul className={styles["nav__container"]}>
          <li
            className={activeTab === "tab1" ? styles.active : ""}
            id={styles.tab1}
            onClick={handleTab1}>
            <h3>How to hire a freelancer</h3>
          </li>
          <li
            className={activeTab === "tab2" ? styles.active : ""}
            id={styles.tab2}
            onClick={handleTab2}>
            <h3>How to earn money freelancing</h3>
          </li>
        </ul>
        <div className={styles.outlet}>
          {/* content goes here */}
          {activeTab === "tab1" ? <Hire /> : <Earn />} 
        </div>
      </div>
    </>
  );
}

export default InfoDetls;
