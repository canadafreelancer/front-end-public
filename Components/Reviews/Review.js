import React from "react";
import { BiUserCircle } from "react-icons/bi";
import styles from "../../styles/Review.module.css";

function Review({ reviews }) {
  const listReviews = reviews.map(({ id, name, reviewDetails }) => (
    <li key={id}>
      <section className={styles["review__detail"]}>
        <div className={styles["review__detail--user"]}>
          <BiUserCircle className={styles["review__detail--icon"]} />
          <h3>{name}</h3>
        </div>

        <p>{reviewDetails}</p>
      </section>
    </li>
  ));
  return (
    <>
      <div className={styles["reviewContainer"]}>
        <h2>Reviews</h2>
        <ul className={styles["review__items"]}>{listReviews}</ul>
      </div>
    </>
  );
}

export default Review;
