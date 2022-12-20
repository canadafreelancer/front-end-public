import Image from "next/image";
import React from "react";
import HeaderBanner from "../../Components/HeaderBanner/HeaderBanner";
import styles from "../../styles/FreelancerDetails.module.css";
import { GrLocation } from "react-icons/gr";
import { BsGenderAmbiguous } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { AiFillStar, AiOutlineCheckSquare } from "react-icons/ai";
import { TbLanguageKatakana } from "react-icons/tb";
import Review from "../Reviews/Review";
import Slider from "../ImageSlider/Slider";
import SuggestedFreelancers from "../SuggestedFreelancers/SuggestedFreelancers";
import listings from "../../utils/Listings";

function FreelancerDetails({ user }) {
  const {
    Freelancer: {
      name,
      type,
      englishLevel,
      gender,
      profilePic,
      profile,
      title,
      startingPrice,
      skills,
      location,
      education,
      work,
      completedProject,
      projectDetails: { overview, reviews, portfolio },
    },
  } = user;

  //filter suggested freelancers
  const filterFreelancers = listings.filter((list) => list.id !== user.id);

  //get each education
  const listEducation = education.map((item) => (
    <li key={item.id}>
      <div className={styles["timeline__item"]}>
        <div className={styles["timeline__top"]}>
          <div className={styles["timeline__circle"]}></div>
          <div className={styles["timeline__title"]}>
            <p>{item.data}</p>
          </div>
          <div className={styles["timeline__desc"]}>
            <h2>{item.course}</h2>
            <h3>{item.college}</h3>
            <p>{item.details}</p>
          </div>
        </div>
      </div>
    </li>
  ));

  //get each work experience
  const listWork = work.map((item) => (
    <li key={item.id}>
      <div className={styles["timeline__item"]}>
        <div className={styles["timeline__top"]}>
          <div className={styles["timeline__circle"]}></div>
          <div className={styles["timeline__title"]}>
            <p>{item.date}</p>
          </div>
          <div className={styles["timeline__desc"]}>
            <h2>{item.title}</h2>
            <h3>{item.company}</h3>
            <p>{item.details}</p>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <HeaderBanner />
      <section className={styles["freelancerDetails__container"]}>
        <div className={styles["freelancerDetails__topContainer"]}>
          <div className={styles["freelancerDetails__topDtls"]}>
            <div className={styles["freelancerDetails__profileImg"]}>
              <Image
                src={profilePic}
                layout="fill"
                alt="profile"
                className={styles["freelancer_img"]}
              />
            </div>

            <section className={styles["freelancer__details"]}>
              <h2>{name}</h2>
              <h3>{title}</h3>
              <p>Member since May 2021</p>
              <div className={styles["freelancer__loc"]}>
                <p>
                  <span className={styles["freelancer__icon"]}>
                    <AiFillStar />
                  </span>
                  4.5 <span>(2 reviews)</span>
                </p>
                <p>
                  <span className={styles["freelancer__icon"]}>
                    <GrLocation />
                  </span>
                  {`Location: ${location}`}
                </p>
                <p>
                  <span className={styles["freelancer__icon"]}>
                    <AiOutlineCheckSquare />
                  </span>
                  {`Completed Projects: ${completedProject}`}
                </p>
              </div>
            </section>
            <div>
              <p className={styles["freelancer__price"]}>
                {`$ ${startingPrice.toFixed(2)}`} <span>per Hour</span>
              </p>

              <div className={styles["freelancer__btn"]}>
                <button>Hire Me</button>
                <button>Message</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["freelancer__aboutContainer"]}>
          <section className={styles["freelancer__about"]}>
            <h2>About Freelancer</h2>
            <p>{overview}</p>
          </section>
          {/* Aside  */}
          <aside className={styles["freelancer__aside"]}>
            <h2>About Me</h2>
            <div className={styles["freelancer__aside--aboutDetls"]}>
              <p>
                <BsGenderAmbiguous
                  className={styles["freelancer__aside--icon"]}
                />
                Gender
              </p>
              <p>{gender}</p>
            </div>
            <div className={styles["freelancer__aside--aboutDetls"]}>
              <p>
                <BiUserPin className={styles["freelancer__aside--icon"]} />
                Type
              </p>
              <p>{type}</p>
            </div>
            <div className={styles["freelancer__aside--aboutDetls"]}>
              <p>
                <TbLanguageKatakana
                  className={styles["freelancer__aside--icon"]}
                />
                English level
              </p>
              <p>{englishLevel}</p>
            </div>
            <div className={styles["freelancer__skillsContainer"]}>
              <h3>Skills</h3>
              <ul className={styles["freelancer__skillsItems"]}>
                {skills.map((skill) => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </div>
          </aside>
        </div>
        {/* Education */}

        <section className={styles["freelancer__education"]}>
          <h2>Education</h2>
          <div className={styles["freelancer__timeline"]}>
            <div className={styles["freelancer__timeline--line"]}></div>
            <div className={styles["freelancer__timeline--items"]}>
              <ul>{listEducation}</ul>
            </div>
          </div>
        </section>
        {/* work experience */}

        <section className={styles["freelancer__work"]}>
          <h2>Experience</h2>
          <div className={styles["freelancer__timeline"]}>
            <div className={styles["freelancer__timeline--line"]}></div>
            <div className={styles["freelancer__timeline--items"]}>
              <ul>{listWork}</ul>
            </div>
          </div>
        </section>
        {/* Portfolio */}
        <section className={styles["portfolio__container"]}>
          <h2>Portfolio</h2>
          <Slider portfolio={portfolio} />
        </section>
        {/* Reviews */}
        <section>
          <Review reviews={reviews} />
        </section>
        {/* Suggested Freelancers */}
        <section>
          <SuggestedFreelancers filterFreelancers={filterFreelancers} />
        </section>
      </section>
    </>
  );
}

export default FreelancerDetails;
