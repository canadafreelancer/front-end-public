import Image from "next/image";
import React from "react";
import styles from "../../styles/FreelancersListing.module.css";
import { ImLocation } from "react-icons/im";
import Link from "next/link";

function SingleFreelancer({ item }) {
  const {
    Freelancer: { name, title, location, skills, profilePic, startingPrice },
  } = item;

  //show skills
  const skill = skills.map((skill) => (
    <li key={skill} className={styles["freelancer__skills--item"]}>
      {skill}
    </li>
  ));
  return (
    <>
      <li className={styles["freelancer__layout--item"]} key={item.id}>
        <article>
          <div className={styles["freelancer__profileImg--wrapper"]}>
            <Image
              src={profilePic}
              alt="profilePic"
              width={150}
              height={150}
              className={styles["freelancer__profileImg"]}
            />
          </div>
          <div className={styles["freelancer__details"]}>
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
          <div className={styles["freelancer__location"]}>
            <p>
              <ImLocation />
            </p>
            <p>{location}</p>
          </div>
          {/* skills */}
          <div className={styles["freelnacer__skillsContainer"]}>
            <ul className={styles["freelancer__skills"]}>{skill}</ul>
          </div>
          <div className={styles["freelancer__price"]}>
            <p>Starting Price:</p>
            <p>{`$ ${startingPrice.toFixed(2)}`}</p>
          </div>
        </article>
        <Link href={`/freelancers/${item.id}`}>
          <button className={styles["freelancer_btn"]}>View Details</button>
        </Link>
      </li>
    </>
  );
}

export default SingleFreelancer;
