import React, { useState } from "react";

import listings from "../../utils/Listings";
import SearchFilters from "./SearchFiltersF";
import styles from "../../styles/FreelancersListing.module.css";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import SingleFreelancer from "./SingleFreelancer";

function FreelancersListing() {
  const [list, setList] = useState(listings);
  const [checkedCat, setCheckedCat] = useState([]);
  const [checkedOpt, setCheckedOpt] = useState([]);

  const handleCategory = (cat) => {
    const currentIndex = checkedCat.indexOf(cat);
    const newCheckedCat = [...checkedCat];

    if (currentIndex === -1) {
      newCheckedCat.push(cat);
    } else {
      newCheckedCat.splice(currentIndex, 1);
    }
    setCheckedCat(newCheckedCat);
  };
  const handleOptions = (opt) => {
    const currentIndex = checkedOpt.indexOf(opt);
    const newCheckedOpt = [...checkedOpt];

    if (currentIndex === -1) {
      newCheckedOpt.push(opt);
    } else {
      newCheckedOpt.splice(currentIndex, 1);
    }
    setCheckedOpt(newCheckedOpt);
  };

  //handle submission of form
  const handleFormSubmit = (e, input, price) => {
    e.preventDefault();

    const beforeFinalArr = listings;
    if (input.length == 0 && checkedCat.length == 0 && checkedOpt.length == 0) {
      setList(listings);
    } else {
      //filter by input field
      const filteredListByKey = [];
      //checked in keyword is entered
      if (input.length > 0) {
        const lowerKeyword = input.toLowerCase();
        //search each list for search input
        listings.map((item) => {
          if (
            item.category.toLowerCase().indexOf(lowerKeyword) != -1 ||
            item.Freelancer.title.toLowerCase().indexOf(lowerKeyword) != -1 ||
            item.Freelancer.location.toLowerCase().indexOf(lowerKeyword) != -1
          ) {
            filteredListByKey.push(item);
          }
        });
      } else filteredListByKey = listings;
      // filtering by category
      const filteredListByCat = [];
      if (checkedCat.length != 0) {
        filteredListByKey.map((item) => {
          if (checkedCat.indexOf(item.category) != -1)
            filteredListByCat.push(item);
        });
      } else filteredListByCat = filteredListByKey;

      // filtering by options
      const filteredListByOpt = [];
      if (checkedOpt.length != 0) {
        // filtering by projectedItem
        const completedProjectItem = [];
        if (checkedOpt.indexOf("completedProject") != -1) {
          filteredListByCat.map((item) => {
            if (item.Freelancer.completedProject > 0) {
              completedProjectItem.push(item);
            }
          });
        } else completedProjectItem = filteredListByCat;
        // filtering by reviewsItem
        const reviewsItem = [];
        if (checkedOpt.indexOf("reviews") != -1) {
          filteredListByCat.map((item) => {
            if (item.Freelancer.projectDetails.reviews.length > 0) {
              reviewsItem.push(item);
            }
          });
        } else reviewsItem = filteredListByCat;
        // filtering by portfolioItem
        const portfolioItem = [];
        if (checkedOpt.indexOf("portfolio") != -1) {
          filteredListByCat.map((item) => {
            if (item.Freelancer.projectDetails.portfolio.length > 0) {
              portfolioItem.push(item);
            }
          });
        } else portfolioItem = filteredListByCat;

        // Intersection for options
        filteredListByOpt = completedProjectItem
          .filter((item) => reviewsItem.includes(item))
          .filter((item) => portfolioItem.includes(item));
      } else filteredListByOpt = filteredListByCat;
      beforeFinalArr = filteredListByOpt;
    }

    //filtering by Cost
    const finalFilteredList = [];
    beforeFinalArr.map((item) => {
      if (item.Freelancer.startingPrice <= price) finalFilteredList.push(item);
    });
    setList(finalFilteredList);
  };

  //get single freelancer
  const freelancer = list.map((item) => <SingleFreelancer item={item} />);

  return (
    <>
      <HeaderBanner props="Freelancers" />
      <main className={styles["freelancers__container"]}>
        <div className={styles["freelancers__main"]}>
          <ul className={styles["freelancer__layout"]}>{freelancer}</ul>
        </div>

        <aside className={styles["freelancers__sidebar"]}>
          <SearchFilters
            handleCategory={handleCategory}
            handleOptions={handleOptions}
            handleFormSubmit={handleFormSubmit}
          />
        </aside>
      </main>
    </>
  );
}

export default FreelancersListing;
