import React from "react";
import styles from "../../styles/JobsFilter.module.css";

function JobsFilter({ filterData }) {
  const { arrLocation, arrCategories } = filterData();

  //display categories
  const categoryList = arrCategories.map((category) => (
    <li key={category}>
      <div className={styles["filter__checkbox"]}>
        <input type="checkbox" id={category} name={category} value={category} />
        <label htmlFor={category}>{category}</label>
      </div>
    </li>
  ));

  //display locations
  const listLocation = arrLocation.map((location) => (
    <li key={location}>
      <div className={styles["filter__checkbox"]}>
        <input type="checkbox" id={location} name={location} value={location} />
        <label htmlFor={location}>{location}</label>
      </div>
    </li>
  ));

  return (
    <>
      <form className={styles["form_container"]}>
        <section className={styles["filter__container"]}>
          <h3 className={styles["filter__heading"]}>Search by keyword</h3>
          <input
            className={styles["search__input"]}
            type="text"
            placeholder="What are you looking for"
          />
        </section>
        <section className={styles["filter__container"]}>
          <h3 className={styles["filter__heading"]}>Filter by category </h3>

          <div>
            <ul className={styles["filter__lists"]}>{categoryList}</ul>
          </div>
        </section>
        <section className={styles["filter__container"]}>
          <h3 className={styles["filter__heading"]}>Filter by location </h3>

          <div>
            <ul className={styles["filter__lists"]}>{listLocation}</ul>
          </div>
        </section>
        <section className={styles["filter__container"]}>
          <p>Select the options and click the button to apply changes</p>
          <button className={styles["filter__btn"]}>Filter results</button>
        </section>
      </form>
    </>
  );
}

export default JobsFilter;
