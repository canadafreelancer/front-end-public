import React from "react";
import Image from "next/image";
import styles from "../../styles/TopSellerDetails.module.css";

function TopSellerDetails(props){
  return(
    <>
      {props.topSeller.Freelancer ?
        <section className={styles["details"]}>
          <h1>{props.topSeller.category} &gt; {props.topSeller.Freelancer.title}</h1>
          {/* Overview */}
          <article>
            <figure className={styles["overview"]}>
              <Image
                src={props.topSeller.Freelancer.profilePic}
                width="400px"
                height="550px"
                alt="Freelancer"
              />
              <figcaption>
                <h2>{props.topSeller.Freelancer.name}</h2>
                <blockquote>{props.topSeller.Freelancer.caption}</blockquote>
                <p>{props.topSeller.Freelancer.profile}</p>
                <p>{`Location : ${props.topSeller.Freelancer.location}`}</p>
                <p>{`CompletedProject : ${props.topSeller.Freelancer.completedProject}`}</p>
              </figcaption>
            </figure>
          </article>
          {/* Projects */}
          <article className={styles["projects"]}>
            <h1>Representive Project</h1>
            <figure className={styles["projectsDetails"]}>
              <Image
                src={props.topSeller.Freelancer.projectDetails.portfolio[0]}
                width="400px"
                height="550px"
                alt={`${props.topSeller.Freelancer.name}'s representive portfolio`}
              />
              <figcaption>
                <h2>{props.topSeller.Freelancer.projectDetails.heading}</h2>
                <p>{props.topSeller.Freelancer.projectDetails.overview}</p>
                <p>{`Duration : ${props.topSeller.Freelancer.projectDetails.duration}`}</p>
                <p>{`Skills : ${props.topSeller.Freelancer.skills.map((skill)=>{
                    return " "+skill;
                  })}`}</p>
              </figcaption>
            </figure>
            <ul className={styles["otherProjects"]}>
              {props.topSeller.Freelancer.projectDetails.portfolio.map((val, idx)=>{
                return <li key={idx}>
                  <Image
                    src={val}
                    width="300px"
                    height="200px"
                    alt={`${props.topSeller.Freelancer.name}'s portfolio ${idx}`}
                  />
                </li>
              })}
            </ul>
          </article>
          {/* Review */}
          <article className={styles["packages"]}>
            <h1>Packages</h1>
            <ul className={styles["packagesDetails"]}>
              {props.topSeller.Freelancer.projectDetails.packages.map((val, idx)=>{
                return <li key={idx}>
                  <h5>{val.packageName}</h5>
                  <h6>{`${val.cost}$`}</h6>
                  <p>{val.details}</p>
                </li>
              })}
            </ul>
            <h1>Customer Reviews</h1>
            <ul className={styles["reviewContents"]}>
              {props.topSeller.Freelancer.projectDetails.reviews.map((review, idx)=>{
                return <li key={idx}>
                  <p>{review.reviewDetails}</p>
                  <h5>{review.name}</h5>
                </li>
              })}
            </ul>
          </article>
        </section>
      : null}
    </>
  )
}
export default TopSellerDetails;