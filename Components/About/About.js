import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import styles from "../../styles/About.module.css";
import AboutPic from "../../public/images/canadaFreelanceAbout.png";

function About() {
  return (
    <div className={styles["about_section"]}>
      <div className={styles["about_container"]}>
        <section className={styles["about_row"]}>
          <div className={styles["about_col"]}>
            <section>
              <div className={styles["about_caption"]}>
                <h2 className={styles["about_heading"]}>
                  Getting Things Done Has Never Been Easy{" "}
                </h2>
                <p className={styles["about_subTitle"]}>
                  Why Businesses Trust Us
                </p>
              </div>
              <div className={styles["about_subCaption"]}>
                <AiOutlineLike className={styles["about_icon"]} />{" "}
                <h4>The best for every budget</h4>
              </div>
              <p className={styles["about_content"]}>
                Find high-quality services at reasonable price point.
              </p>

              <div>
                <div className={styles["about_subCaption"]}>
                  <AiOutlineLike className={styles["about_icon"]} />
                  <h4>Quality work done quickly</h4>
                </div>
                <p className={styles["about_content"]}>
                  Find the right freelancer to begin working on your project
                  within minutes
                </p>
              </div>
              <div>
                <div className={styles["about_subCaption"]}>
                  <AiOutlineLike className={styles["about_icon"]} />
                  <h4>Protected payments, every time</h4>
                </div>
                <p className={styles["about_content"]}>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </div>

              <button className={styles["about_btn"]}>Start Now</button>
            </section>
          </div>
          <div className={styles["about_col"]}>
            <Image src={AboutPic} className={styles["about_img"]} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
