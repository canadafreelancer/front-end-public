import React from "react";
import styles from "../../../styles/Categories.module.css";
import Image from "next/image";
import SearchFilters from "../../SearchFilters/SearchFilters";
import Link from "next/link";

function SingleSale({ allSalesCat }) {
  const singleItem = allSalesCat.map((item) => {
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
            <Link href={`sales/${item.id}`}>
              <button className={styles["category__btn"]}>View Details</button>
            </Link>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div>
      <div className={styles["categories__container"]}>
        <main className={styles["categories__main"]}>
          <ul>{singleItem}</ul>
        </main>

        <aside className={styles["categories__aside"]}>
          <SearchFilters />
        </aside>
      </div>
    </div>
  );
}

export default SingleSale;
