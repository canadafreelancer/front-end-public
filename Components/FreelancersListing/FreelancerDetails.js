import Image from "next/image";
import React from "react";
import HeaderBanner from "../../Components/HeaderBanner/HeaderBanner";
import styles from "../../styles/FreelancerDetails.module.css";
import { GrLocation } from "react-icons/gr";
import { AiOutlineCheckSquare } from "react-icons/ai";

function FreelancerDetails({ user }) {
  const {
    Freelancer: {
      name,
      profilePic,
      profile,
      title,
      startingPrice,
      skills,
      location,
      caption,
      completedProject,
      projectDetails: { overview },
    },
  } = user;
  console.log(user);
  return (
    <>
      <HeaderBanner />
      <section className={styles["freelancerDetails__container"]}>
        <div className={styles["freelancerDetails__topContainer"]}>
          <div className={styles["freelancerDetails__topDtls"]}>
            <div className={styles["freelancerDetails__profileImg"]}>
              <Image
                src={profilePic}
                layout="fill"
                alt="profile"
                className={styles["freelancer_img"]}
              />
            </div>

            <section className={styles["freelancer__details"]}>
              <h2>{caption}</h2>
              <h3>{name}</h3>
              <p>{title}</p>
              <div className={styles["freelancer__loc"]}>
                <p>
                  <span className={styles["freelancer__icon"]}>
                    <GrLocation />
                  </span>
                  {`Location: ${location}`}
                </p>
                <p>
                  <span className={styles["freelancer__icon"]}>
                    <AiOutlineCheckSquare />
                  </span>
                  {`Completed Projects: ${completedProject}`}
                </p>
              </div>
            </section>
            <div className={styles["freelancer__btnContainer"]}>
              <p>{`Starting Price: $ ${startingPrice.toFixed(2)}`}</p>
              <button className={styles["freelancer__btn"]}>Hire Me</button>
            </div>
          </div>
        </div>
        <div className={styles["freelancer__aboutContainer"]}>
          <section className={styles["freelancer__about"]}>
            <h2>About Freelancer</h2>
            <p>{overview}</p>
          </section>

          <aside className={styles["freelancer__aside"]}>
            <h2>About Me</h2>
            <p>{`${profile.slice(0, 100)}...`}</p>
            <p>Freelancer Type: Contract</p>
            <p>English Level:Fluent</p>
            <div>
              <p>Skills</p>
              <ul>
                {skills.map((skill) => {
                  return <li>{skill}</li>;
                })}
              </ul>
            </div>
          </aside>
        </div>
        <div>
          <h2>Recent Projects</h2>
        </div>
      </section>
    </>
  );
}

export default FreelancerDetails;
