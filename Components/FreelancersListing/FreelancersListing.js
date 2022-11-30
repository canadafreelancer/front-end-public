import React, {useState} from "react";
import { MdReviews, MdOutlineWork, MdLocationOn, MdContactSupport } from "react-icons/md";
import Link from "next/link";
import listings from "../../utils/Listings";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SearchFilters from "./SearchFiltersF";
import HeaderImage from "../../Components/HeaderImage/HeaderImage";
import styles from "../../styles/FreelancersListing.module.css";

function JobsListing() {
  
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
  const handleFormSubmit = (e, input, price) => {
    e.preventDefault();

    const beforeFinalArr = listings;
    if(input.length == 0 && checkedCat.length == 0 && checkedOpt.length == 0){
      setList(listings);
    }else{
      const filteredListByKey = [];
      if(input.length > 0){
        const lowerKeyword = input.toLowerCase();
        listings.map(item=>{
          if(item.category.toLowerCase().indexOf(lowerKeyword) != -1 || item.Freelancer.title.toLowerCase().indexOf(lowerKeyword) != -1 || item.Freelancer.location.toLowerCase().indexOf(lowerKeyword) != -1){
            filteredListByKey.push(item);
          }
        })
      }else filteredListByKey = listings;
      // filtering by category
      const filteredListByCat = [];
      if(checkedCat.length != 0){
        filteredListByKey.map(item=>{
          if(checkedCat.indexOf(item.category) != -1)
            filteredListByCat.push(item);
        });
      }else filteredListByCat = filteredListByKey;

      // filtering by options
      const filteredListByOpt = [];
      if(checkedOpt.length != 0){
        // filtering by projectedItem
        const completedProjectItem = [];
        if(checkedOpt.indexOf("completedProject") != -1){
          filteredListByCat.map(item=>{
            if(item.Freelancer.completedProject > 0){
              completedProjectItem.push(item);
            }
          });
        }else completedProjectItem = filteredListByCat;
        // filtering by reviewsItem
        const reviewsItem = [];
        if(checkedOpt.indexOf("reviews") != -1){
          filteredListByCat.map(item=>{
            if(item.Freelancer.projectDetails.reviews.length > 0){
              reviewsItem.push(item);
            }
          });
        }else reviewsItem = filteredListByCat;
        // filtering by portfolioItem
        const portfolioItem = [];
        if(checkedOpt.indexOf("portfolio") != -1){
          filteredListByCat.map(item=>{
            if(item.Freelancer.projectDetails.portfolio.length > 0){
              portfolioItem.push(item);
            }
          });
        }else portfolioItem = filteredListByCat;

        // Intersection for options
        filteredListByOpt = completedProjectItem
          .filter(item=>reviewsItem.includes(item))
          .filter(item=>portfolioItem.includes(item));
      }else filteredListByOpt = filteredListByCat;
      beforeFinalArr = filteredListByOpt;
    }

    //filtering by Cost
    const finalFilteredList = [];
    beforeFinalArr.map(item=>{
      if(item.Freelancer.startingPrice <= price)
        finalFilteredList.push(item);
    });
    setList(finalFilteredList);
  }

  return (
    <>
      <header>
        <Nav/>  
      </header>
      <main>
        <section>
          <div className={styles["header-image__container"]}>
            <HeaderImage />
            <div className={styles["header_text"]}>Freelancers</div>
          </div>
        </section>
        <section className={styles["page"]}>
          <article>
            <ul className={styles["freelancer-list"]}>
              {list.map(freelancer=>{
                return <Link href={`/freelancers/${freelancer.id}`} key={freelancer.id}><li className={styles["freelancer"]}>
                  <div className={styles["top"]}>
                    <div>
                      <h1>{freelancer.category}</h1>
                      <h2>{freelancer.Freelancer.title}</h2>
                    </div>
                    <ul className={styles["skills"]}>
                      {freelancer.Freelancer.skills.map((val, idx)=>{
                        return <li key={idx}><aside>{val[0]}</aside><p>{val}</p></li>
                      })}
                    </ul>
                  </div>
                  <div className={styles["middle"]}>
                      <div className={styles["middle-left"]}>
                        <ul>
                          <li><MdLocationOn/>{freelancer.Freelancer.location}</li>
                          <li><MdOutlineWork/>{`${("0" + freelancer.Freelancer.completedProject).slice(-2)} Projects`}</li>
                          <li><MdReviews/>{`${("0" + freelancer.Freelancer.projectDetails.reviews.length).slice(-2)} Reviews`}</li>
                        </ul>
                        <p>{`${freelancer.Freelancer.profile.slice(0, 250)}...`}</p>
                      </div>
                      <div className={styles["middle-right"]}>
                        <h3>{`$${freelancer.Freelancer.startingPrice.toFixed(2)}`}</h3>
                        <h4>(per hour)</h4>
                        <button>View Details</button>
                      </div>
                  </div>
                </li></Link>
              })}
            </ul>
          </article>
          <article>
            <div className={styles["search"]}>
              <SearchFilters
                handleCategory={handleCategory}
                handleOptions={handleOptions}
                handleFormSubmit={handleFormSubmit}
              />
            </div>
          </article>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default JobsListing;