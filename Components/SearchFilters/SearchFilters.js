import React, { useState, useRef } from "react";
import styles from "../../styles/SearchFilters.module.css";
import listing from "../../utils/Listings.js";

function SearchFilters() {
  const inputKeyword = useRef(null);

  const [priceChange, setpriceChange] = useState(100);

  // get unique Categories
  const allCategories = listing.map((job) => job.category);
  const uniqueCategories = new Set(allCategories);
  const arrCategories = Array.from(uniqueCategories);

  //get unique freelancer location
  const allLocation = listing.map((job) => job.Freelancer.location);
  const uniqueLocation = new Set(allLocation);
  const arrLocation = Array.from(uniqueLocation);

  return (
    <>
      <div className={styles["filter-container"]}>
        <form>
          <section className={styles["filter-inputField"]}>
            <h3 className={styles["filter-title"]}>Search by Keyword</h3>
            <input type="text" placeholder="Enter keyword" />
          </section>
          <section>
            <h3 className={styles["filter-title"]}>Search By Category</h3>
            <fieldset className={styles["filter-fieldset"]}>
              <legend>Categories</legend>
              {arrCategories.map((category, index) => {
                return (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={category}
                      name={category}
                      value={category}
                    />
                    <label
                      htmlFor={category}
                      className={styles["filter-label"]}>
                      {category}
                    </label>
                  </div>
                );
              })}
            </fieldset>
          </section>
          <section>
            <h3 className={styles["filter-title"]}>Search By Type</h3>
            <fieldset className={styles["filter-fieldset"]}>
              <legend> Filter by Location</legend>
              {arrLocation.map((location, index) => {
                return (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={location}
                      name={location}
                      value={location}
                    />

                    <label
                      htmlFor={location}
                      className={styles["filter-label"]}>
                      {location}
                    </label>
                  </div>
                );
              })}
            </fieldset>
          </section>
          <section>
            <h3 className={styles["filter-title"]}>Price Range</h3>
            <div className={styles["price-slider"]}>
              <input
                type="range"
                min={50}
                max={9999}
                step={10}
                value={priceChange}></input>
              <h3>{priceChange}</h3>
            </div>
          </section>
          <section className={styles["filter_btn--container"]}>
            <p>
              Select the options and press the Filter Result button to apply the
              changes
            </p>
            <button> Filter Result</button>
          </section>
        </form>
      </div>
    </>
  );
}

export default SearchFilters;
