import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import listings from "../../utils/Listings";
import styles from "../../styles/Freelancers.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Freelancers() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const router = useRouter();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={styles["freelance_container"]}>
      <section className={styles["freelance_heading"]}>
        <h2>Most Hired Freelancers</h2>
        <p>
          Work with talented people at the most affordable price to get your job
          done
        </p>
      </section>
      <motion.section className={styles.carousel} ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}>
          {listings.map((listing) => (
            <motion.article
              key={listing.id}
              className={styles["freelance_item"]}>
              <div className={styles["freelance_imgWrapper"]}>
                <Image
                  src={listing.Freelancer.profilePic}
                  alt="Freelancer"
                  width={200}
                  height={250}
                  quality="100"
                  className={styles["freelance_img"]}
                />
              </div>
              <div className={styles["freelance_title"]}>
                <h2>{listing.Freelancer.name}</h2>
                <p>{listing.Freelancer.title}</p>
              </div>
              <p className={styles["freelance_details"]}>
                {listing.Freelancer.profile.slice(0, 45)}
              </p>

              <div className={styles["freelance_projects"]}>
                <p>
                  {`$${listing.Freelancer.startingPrice}`} <span>per hour</span>
                </p>
                <p>
                  {listing.Freelancer.completedProject} <span> jobs done </span>
                </p>
              </div>
              <div className={styles["freelance_skills_wrapper"]}>
                <ul className={styles["freelance_skills"]}>
                  {listing.Freelancer.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <button className={styles["freelance_btn"]} onClick={()=>router.push(`/freelancers/${listing.id}`)}>View Details</button>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Freelancers;
