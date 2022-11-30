import React, {useState} from "react";
import styles from "../../styles/TrendingServices.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import listings from "../../utils/Listings";
import { MdOutlineVerifiedUser, MdOutlineFavoriteBorder, MdClose } from "react-icons/md";

function TrendingServices() {
  const [topSeller, setTopSeller] = useState({});
  const router = useRouter();

  return (
    <>
      <section className={styles["topSellers_wrapper"]}>
        {/* Section Description */}
        <article className={styles["topSellers_heading"]}>
          <h2>Trending Services</h2>
          <p>Browse a list of Top Sellers </p>
        </article>
        {/* Section Content */}
        <article>
          <ul className={styles["topSellers_lists"]}>
            {listings.map((list) => (
              <li key={list.id} className={styles["trendingModalList"]} onClick={()=>router.push(`/freelancers/${list.id}`)}>
                <div className={styles["topSeller_item"]}>
                  {/* Top part */}
                  <Image
                    src={list.Freelancer.coverImg}
                    width="400px"
                    height="550px"
                    className={styles["topSeller_img"]}
                    alt="Freelancer"
                  />
                  {/* Middle Part */}
                  <div className={styles["topSeller_profileSec"]}>
                    <Image
                      src={list.Freelancer.profilePic}
                      width="40px"
                      height="40px"
                      className={styles["topSeller_profilePic"]}
                      alt="ProfilePic"
                    />
                    <div className={styles["topSeller_name_wrapper"]}>
                      <p>{list.Freelancer.name}</p>
                      <p><MdOutlineVerifiedUser /></p>
                    </div>
                  </div>
                  <p
                    className={
                      styles["topSeller_desc"]
                    }>{`${list.Freelancer.caption.slice(0, 65)}...`}</p>
                  <hr className={styles["topSeller_hr"]} />
                  {/* Bottom Part */}
                  <div className={styles["topSeller_price"]}>
                    <p>
                      Starting from
                      <span>{`$${list.Freelancer.startingPrice.toFixed(
                        2
                      )}`}</span>
                    </p>
                    {/* <p><MdOutlineFavoriteBorder /></p> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
export default TrendingServices;
