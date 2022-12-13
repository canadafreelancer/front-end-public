import React from "react";
import styles from "../../../styles/CategoryDetails.module.css";
import Image from "next/image";
import {
  MdOutlineAccessTime,
  MdOutlineCheckBox,
  MdOutlineLocationOn,
} from "react-icons/md";
import Slider from "../../ImageSlider/Slider";

function WritingDetails({ data }) {
  const {
    Freelancer: {
      startingPrice,
      profile,
      profilePic,
      title,
      location,
      caption,
      skills,
      name,
      completedProject,
      projectDetails: { overview, duration, reviews, portfolio },
    },
  } = data;

  // display all review s
  let reviewLists = reviews.map(({ name, reviewDetails, id, pic }) => (
    <li key={id} className={styles["review__item"]}>
      <section>
        <div className={styles["review__profile"]}>
          <Image
            src={pic}
            width={50}
            height={50}
            alt={pic}
            className={styles["review__profile--pic"]}
          />
          <h3>{name}</h3>
        </div>

        <p className={styles["review__item--content"]}>{reviewDetails}</p>
      </section>
    </li>
  ));
  return (
    <>
      <div className={styles["categoryDetails__container"]}>
        <div className={styles["categoryDetails__main"]}>
          {/* main */}
          <section className={styles["categoryDetails__heading"]}>
            <h2>{caption}</h2>

            <section className={styles["categoryDetails__top"]}>
              <div className={styles["categoryDetails__top--item"]}>
                <MdOutlineLocationOn
                  className={styles["categoryDetails__top--icon"]}
                />
                <span>Location</span>
                <p>{location}</p>
              </div>
              <div className={styles["categoryDetails__top--item"]}>
                <MdOutlineCheckBox
                  className={styles["categoryDetails__top--icon"]}
                />

                <span>Completed Projects</span>
                <p>{completedProject}</p>
              </div>
              <div className={styles["categoryDetails__top--item"]}>
                <MdOutlineAccessTime
                  className={styles["categoryDetails__top--icon"]}
                />
                <span>Duration</span>
                <p>{duration}</p>
              </div>
            </section>
          </section>
          <section className={styles["categoryDetails_desc"]}>
            <h2>Description</h2>
            <p>{overview}</p>
          </section>
          {/* Portfolio */}
          <section className={styles["categoryDetails__porfolio"]}>
            <Slider portfolio={portfolio} />
          </section>

          {/* reviews */}
          <section className={styles["categoryDetails__review"]}>
            <h2>Reviews</h2>
            <ul className={styles["categoryDetails__review_lists"]}>
              {reviewLists}
            </ul>
          </section>
        </div>
        <div className={styles["categoryDetails__aside"]}>
          {/* aside */}
          <div className={styles["categoryDetails__aside--price"]}>
            <h2>Starting from : {`${startingPrice.toFixed(2)} USD`}</h2>
          </div>
          <section className={styles["categoryDetails__aside--seller"]}>
            <section
              className={styles["categoryDetails__aside--sellerContainer"]}>
              <h2>About Seller</h2>
              <div className={styles["categoryDetails__aside--pic1"]}>
                <Image
                  src={profilePic}
                  width={100}
                  height={100}
                  alt="profilePic"
                  className={styles["categoryDetails__profileImg"]}
                />
              </div>
              <h3>{name}</h3>
              <p>{title}</p>
            </section>

            <div className={styles["categoryDetails__profile"]}>
              <p>{profile.slice(0, 200)}</p>
            </div>
            <div className={styles["categoryDetails__skills"]}>
              <h2>Skills</h2>
              <ul>
                {skills.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </div>
            <div className={styles["categoryDetails_btn"]}>
              <button>Contact Seller</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default WritingDetails;
