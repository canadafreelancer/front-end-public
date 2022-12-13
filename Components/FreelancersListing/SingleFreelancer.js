import Image from "next/image";
import React from "react";
import styles from "../../styles/FreelancersListing.module.css";

function SingleFreelancer({ item }) {
  const {
    Freelancer: { name, title, location, skills, profilePic, startingPrice },
  } = item;

  //show skills
  const skill = skills.map((skill) => <li key={skill}>{skill}</li>);
  return (
    <>
      <li className={styles["freelancer__layout--item"]}>
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
          <div>
            <h2>{name}</h2>
            <p>{title}</p>
            <p>{location}</p>
          </div>
          {/* skills */}
          <div>
            <ul className={styles["freelancer__skills"]}>{skill}</ul>
            <p>{startingPrice}</p>
          </div>
        </article>
        <button>View Details</button>
      </li>
    </>
  );
}

export default SingleFreelancer;
