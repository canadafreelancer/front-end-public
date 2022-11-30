import React from "react";
import Image from "next/image";
import CFHeader from "../../public/images/CFHeader2.jpg";
import styles from "../../styles/HeaderImage.module.css";

function HeaderImage() {
  return (
    <>
      <div className={styles["header_img"]}>
        <Image src={CFHeader} alt="HeaderImage" layout="responsive" />
      </div>
    </>
  );
}

export default HeaderImage;
