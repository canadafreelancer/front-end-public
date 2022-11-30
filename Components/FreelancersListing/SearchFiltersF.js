import React, { useState, useRef } from "react";
import styles from "../../styles/SearchFiltersForFreelancers.module.css";
import listings from "../../utils/Listings";


function SearchFilters({handleCategory, handleOptions, handleFormSubmit}) {
  const inputKeyword = useRef(null);

  // get unique Categories
  const category = listings.map(list=>list.category);
  const uniqueCat = new Set(category);
  const arrCategories = Array.from(uniqueCat);

  //check minimum and maximum price
  const minmax = [listings[0].Freelancer.startingPrice, listings[0].Freelancer.startingPrice];
  listings.map(list=>{
    if(list.Freelancer.startingPrice < minmax[0])
      minmax[0] = list.Freelancer.startingPrice;
    if(list.Freelancer.startingPrice > minmax[1])
      minmax[1] = list.Freelancer.startingPrice;
  });
  const averagePrice = (minmax[1]-minmax[0]) / 2 + minmax[0];
  const [priceChange, setpriceChange] = useState(averagePrice);
  
  //changePrice
  const handlePriceChange = (e) => {
    setpriceChange(e.target.value);
  };
  return (
    <>
      <div className={styles["filter-container"]}>
        <form onSubmit={(e)=>handleFormSubmit(e, inputKeyword.current.value, priceChange)}>
          <section className={styles["filter-inputField"]}>
            <h3 className={styles["filter-title"]}>Search by Keyword</h3>
            <input
              type="text"
              placeholder="Enter keyword"
              ref={inputKeyword}
            />
          </section>
          <section>
            <h3 className={styles["filter-title"]}>Search By Category</h3>
            <fieldset className={styles["filter-fieldset"]}>
              <legend>Categories</legend>
              {arrCategories.map((category, idx)=>{
                return <div key={idx}>
                  <input
                    type="checkbox"
                    id={category}
                    name={category}
                    value={category}
                    onChange={()=>{handleCategory(category)}}
                  />
                  <label htmlFor={category} className={styles["filter-label"]}>
                    {category}
                  </label>
                </div>
              })}
            </fieldset>
          </section>
          <section>
            <h3 className={styles["filter-title"]}>Search By Options</h3>
            <fieldset className={styles["filter-fieldset"]}>
              <legend>Options</legend>
              <div>
                <input type="checkbox" id="hasCompletedPJ" name="hasCompletedPJ" onChange={()=>handleOptions("completedProject")}/>
                <label htmlFor="hasCompletedPJ" className={styles["filter-label"]}>Completed projects</label>
              </div>
              <div>
                <input type="checkbox" id="hasReviews" name="hasReviews" onChange={()=>handleOptions("reviews")}/>
                <label htmlFor="hasReviews" className={styles["filter-label"]}>Reviews</label>
              </div>
              <div>
                <input type="checkbox" id="hasPortfolio" name="hasPortfolio" onChange={()=>handleOptions("portfolio")}/>
                <label htmlFor="hasPortfolio" className={styles["filter-label"]}>Portfolio</label>
              </div>
            </fieldset>
          </section>
          <section>
            <h3 className={styles["filter-title"]}>Price Range</h3>
            <div className={styles["price-slider"]}>
              <input
                onChange={handlePriceChange}
                type="range"
                min={minmax[0]}
                max={minmax[1]}
                step={1}
                value={priceChange}></input>
              <h3>~${priceChange}</h3>
            </div>
          </section>
          <section className={styles["filter_btn--container"]}>
            <p>
              Select the options and press the Filter Result button to apply the
              changes
            </p>
            <button>Filter Result</button>
          </section>
        </form>
      </div>
    </>
  );
}

export default SearchFilters;
