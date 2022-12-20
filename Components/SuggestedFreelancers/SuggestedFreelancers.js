import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "../../styles/SuggestedFreelancers.module.css";

function SuggestedFreelancers({ filterFreelancers }) {
  //list 3 suggested freelancers
  const suggestedFreelancers = filterFreelancers.splice(0, 4);

  const freelancers = suggestedFreelancers.map((freelancer) => {
    const {
      id,
      Freelancer: { name, profilePic, location, title, type, startingPrice },
    } = freelancer;
    return (
      <li key={id}>
        <div className={styles["suggestedFreelancer--item"]}>
          <div className={styles["suggestedFreelancer__profileImg"]}>
            <Image
              src={profilePic}
              alt="profilePic"
              layout="fill"
              className={styles["profile__img"]}
            />
          </div>

          <h3>{name}</h3>
          <p>{title}</p>
          <p>
            Hourly rate: <span>{`$ ${startingPrice.toFixed(2)}`}</span>
          </p>

          <Link href={`/freelancers/${id}`}>
            <button className={styles["suggestedFreelancer__btn"]}>
              View Details
            </button>
          </Link>
        </div>
      </li>
    );
  });
  return (
    <>
      <section className={styles["suggestedFreelancers__container"]}>
        <h2>Suggested Freelancers</h2>
        <ul className={styles["suggestedFreelancers__list"]}>{freelancers}</ul>
      </section>
    </>
  );
}

export default SuggestedFreelancers;
