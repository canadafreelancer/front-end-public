import React from "react";
import styles from "../../styles/Footer.module.css";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import Logo from "../../public/images/canadaFreelanceLogo.png";

function FooterDetails() {
  return (
    <div className={styles["footer_container"]}>
      {/* <h3>CanadaFreelancer</h3> */}
      <Image
        src={Logo}
        alt="canadaFreelancer"
        width={140}
        height={50}
        className={styles["footerLogo"]}
      />

      <section className={styles["footerContent_wrapper"]}>
        <section className={styles["footer_col"]}>
          <h4>Product</h4>
          <ul className={styles["footer_items"]}>
            <li>About</li>
            <li>Team</li>
            <li>Career</li>
          </ul>
        </section>
        <section className={styles["footer_col"]}>
          <h4>Support</h4>
          <ul className={styles["footer_items"]}>
            <li>How it works</li>
            <li>Trust and Safety</li>
            <li>Help Center</li>
          </ul>
        </section>
        <section className={styles["footer_col"]}>
          <h4>Discover</h4>
          <ul className={styles["footer_items"]}>
            <li>Guides</li>
            <li>Stories</li>
            <li>News</li>
          </ul>
        </section>
        <section className={styles["footer_col"]}>
          <h4>Browse</h4>
          <ul className={styles["footer_items"]}>
            <li>Freelance Services</li>
            <li>Freelance Skills</li>
            <li>Projects</li>
          </ul>
        </section>
      </section>
      <hr className={styles["footer_hr"]} />
      <section className={styles["footer_socials"]}>
        <MdFacebook />
        <AiFillTwitterCircle />
        <AiFillInstagram />
        <AiFillLinkedin />
      </section>
    </div>
  );
}

export default FooterDetails;
