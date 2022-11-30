import React from "react";
import listings from "../../../utils/Listings";
import styles from "../../../styles/Categories.module.css";
import Image from "next/image";

function TechProgramming() {
  const allTech = listings.filter(
    (job) => job.category === "Tech & Programming"
  );

  //singTech
  const categoryList = allTech.map((item) => {
    const {
      Freelancer: {
        profilePic,
        caption,
        name,
        coverImg,
        startingPrice,
        skills,
        title,
        completedProject,
      },
    } = item;
    return (
      <li key={item.id} className={styles["category__main--Item"]}>
        <div className={styles["category__portfolioImg"]}>
          <Image
            src={coverImg}
            alt={name}
            width="300"
            height="350"
            className={styles["category__coverImg"]}
          />
        </div>
        <div className={styles["cateogry__detailsContainer"]}>
          <div className={styles["category__seller"]}>
            <div className={styles["category__seller--col"]}>
              <div className={styles["category__seller--detlsCont"]}>
                <Image
                  src={profilePic}
                  alt={profilePic}
                  width="50"
                  height="50"
                  className={styles["category__profileImg"]}
                />
                <section>
                  <h3>{name}</h3>
                  <p className={styles["category__seller--title"]}>{title}</p>
                </section>
              </div>
            </div>
            <div className={styles["category__seller--col"]}>
              <p
                className={
                  styles["category__seller--price"]
                }>{`$ ${startingPrice}`}</p>
            </div>
          </div>

          <h2 className={styles["category_seller--caption"]}>{caption}</h2>
          <div className={styles["category_skillsContainer"]}>
            <ul>
              {skills.map((skill) => (
                <li className={styles["category_skill"]} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
            <button className={styles["category__btn"]}>View Details</button>
          </div>
        </div>
      </li>
    );
  });
  return (
    <>
      <div className={styles["categories__container"]}>
        <main className={styles["categories__main"]}>
          <ul>{categoryList}</ul>
        </main>
        <aside className={styles["categories__aside"]}>
          Side bar filter goes here
        </aside>
      </div>
    </>
  );
}

export default TechProgramming;
