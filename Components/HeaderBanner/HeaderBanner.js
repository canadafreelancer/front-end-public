import React from "react";
import styles from "../../styles/HeaderBanner.module.css";
function HeaderBanner({ props }) {
  return (
    <>
      <div className={styles["headerBanner"]}>
        <h2>{props}</h2>
      </div>
    </>
  );
}

export default HeaderBanner;
