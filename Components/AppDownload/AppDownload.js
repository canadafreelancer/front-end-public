import Image from "next/image";
import React from "react";
import freelancerImg from "../../public/images/FreelanceTalents.jpg";
import styles from "../../styles/AppDownload.module.css";
import appStoreLogo from "../../public/images/apple.png";
import playStoreLogo from "../../public/images/google.png";

function AppDownload() {
  return (
    <div>
      <section className={styles["appDownload_row"]}>
        <section className={styles["appDownload_col"]}>
          <div className={styles["appDownload_caption"]}>
            <h3>Productivity on the go, anywhere, anytime.</h3>
            <p>
              It's time to migrate online and make extra cash from your very own
              fine-tuned set of skills
            </p>
            <p>
              Find and connect with talented freelancers that fits your budget,
              search and apply for unique projects whiles on-the-go
            </p>
            <div className={styles["appStore_wrapper"]}>
              <h4>Download the mobile app</h4>
              <div className={styles["appStore_logo"]}>
                <Image src={appStoreLogo} width={200} height={70} />
                <Image src={playStoreLogo} width={200} height={70} />
              </div>
            </div>
          </div>
        </section>
        <div className={styles["appDownload_col"]}>
          <Image src={freelancerImg} />
        </div>
      </section>
    </div>
  );
}

export default AppDownload;
