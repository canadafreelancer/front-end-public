import React from "react";
import Image from "next/image";
import background from "../../public/images/76.jpg";
import styles from "../../styles/ClientImage.module.css";

function ClientImage() {
  return (
    <>
      <div className={styles["background_img"]}>
        <Image src={background} alt="HeaderImage" layout="intrinsic" />
      </div>
    </>
  );
}

export default ClientImage;