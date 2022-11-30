import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Hero.module.css";
import HeroImg from "../../public/images/newHeroImg.png";
import building from "../../public/images/buildingCF.png";

function Hero() {
  return (
    <>
      <section className={styles["hero_container"]}>
        <div className={styles["hero_col"]}>
          <section className={styles["hero_content"]}>
            <h1>Bring Smart Ideas To Life.Anytime,Anywhere</h1>
            <h2>
              Access thousands of experienced and skilled Freelancers in Canada
            </h2>
            <p>
              We help you find professional freelancers to build website, mobile
              application, do graphic, write proposals, research and so much
              more
            </p>
            <div className={styles["hero_btn"]}>
              <Link href="/SingleJob">
                <a className={styles["hero_btnStart"]}>Get Started</a>
              </Link>
              <Link href="/SingleJob">
                <a className={styles["hero_btnLearn"]}>Learn more</a>
              </Link>
            </div>
          </section>
        </div>
        <div className={`${styles["hero_col"]} ${styles["hero_img"]}`}>
          <Image
            className={styles.pix}
            src={HeroImg}
            alt="canadaFreelancer"
            width={707}
            height={353}
          />
          <div className={styles["hero__buildingImg"]}>
            <Image src={building} alt="CFbuilding" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
