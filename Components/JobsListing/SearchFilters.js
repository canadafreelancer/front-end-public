import React, { useState, useRef } from "react";
import styles from "../../styles/SearchFilters.module.css";
import jobListings from "../../utils/jobListings";
// import jobsListing from "../../utils/jobListings";

function SearchFilters({
  handleCategory,
  handleFreelanceType,
  handleFormSubmission,
}) {
  const inputKeyword = useRef(null);

  const [priceChange, setpriceChange] = useState(100);
  // get unique Categories
  const cat = jobListings.map((job) => job.category);
  const uniqueCat = new Set(cat);
  const arrCategories = Array.from(uniqueCat);

  //get unique freelance type
  const freelanceType = jobListings.map((job) => job.freelanceType);
  const uniqueFreelance = new Set(freelanceType);
  const arrFreelanceType = Array.from(uniqueFreelance);

  //changePrice
  const handlePriceChange = (e) => {
    setpriceChange(e.target.value);
  };
  //handleFormInput
  let input;
  const handleFormInput = () => {
    input = inputKeyword.current.value;
    console.log(input);
  };

  return (
    <>
      <div className={styles["filter-container"]}>
        <form onSubmit={handleFormSubmission}>
          <section className={styles["filter-inputField"]}>
            <h3 className={styles["filter-title"]}>Search by Keyword</h3>
            <input
              type="text"
              placeholder="Enter keyword"
              ref={inputKeyword}
              onChange={handleFormInput}
            />
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
                      onChange={() => handleCategory(category, index)}
                    />
                    <label htmlFor={cat} className={styles["filter-label"]}>
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
              <legend> Freelancer Type</legend>
              {arrFreelanceType.map((freelanceType, index) => {
                return (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={freelanceType}
                      name={freelanceType}
                      value={freelanceType}
                      onChange={() => handleFreelanceType(freelanceType, index)}
                    />

                    <label
                      htmlFor={freelanceType}
                      className={styles["filter-label"]}>
                      {freelanceType}
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
                onChange={handlePriceChange}
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
