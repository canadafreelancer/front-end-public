import Image from "next/image";
import { MdReviews, MdOutlineWork, MdLocationOn } from "react-icons/md";
import NavBar from "../../components/Nav/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/FreelancerDetails.module.css";
import listings from "../../utils/Listings";

export const getStaticPaths = () => {
  const paths = listings.map((freelancer) => {
    return {
      params: {
        id: freelancer.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.id;
  const user = listings[id - 1];
  return {
    props: { user: user },
  };
};

function details({ user }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className={styles["profile"]}>
          <Image
            src={user.Freelancer.profilePic}
            width="200px"
            height="300px"
            className={styles["profile_img"]}
            alt="Freelancer"
          />
          <article className={styles["profile_content"]}>
            <div className={styles["left"]}>
              <h1>
                {user.category} &gt; {user.Freelancer.title}
              </h1>
              <h2>{user.Freelancer.name}</h2>
              <ul className={styles["badge"]}>
                <li>
                  <MdLocationOn />
                  {user.Freelancer.location}
                </li>
                <li>
                  <MdOutlineWork />
                  {`${("0" + user.Freelancer.completedProject).slice(
                    -2
                  )} Projects`}
                </li>
                <li>
                  <MdReviews />
                  {`${(
                    "0" + user.Freelancer.projectDetails.reviews.length
                  ).slice(-2)} Reviews`}
                </li>
              </ul>
              <ul className={styles["skills"]}>
                {user.Freelancer.skills.map((val, idx) => {
                  return (
                    <li key={idx}>
                      <aside>{val[0]}</aside>
                      <p>{val}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles["right"]}>
              <div className={styles["right-top"]}>
                <p>${user.Freelancer.startingPrice.toFixed(2)}</p>
                <p>(per hour)</p>
              </div>
              <div className={styles["right-bottom"]}>
                <button>Contact</button>
              </div>
            </div>
          </article>
        </section>
        <section className={styles["about-freelancer"]}>
          <article className={styles["about-left"]}>
            <section className={styles["about-top"]}>
              <div className={styles["left-desc"]}>
                <h1>Description</h1>
                <h2>"{user.Freelancer.caption}"</h2>
                <p>{user.Freelancer.profile}</p>
              </div>
              <div className={styles["left-pd"]}>
                <h1>
                  Project Details -{" "}
                  <span>{user.Freelancer.projectDetails.heading}</span>
                </h1>
                {user.Freelancer.projectDetails.overview
                  .split("\n")
                  .map((val, idx) => {
                    return <p key={idx}>{val}</p>;
                  })}
                <blockquote>
                  Duration : {user.Freelancer.projectDetails.duration}
                </blockquote>
              </div>
            </section>
            <aside>Banner</aside>
          </article>
          <article className={styles["about-right"]}>
            <div className={styles["right-po"]}>
              <h1>Portfolio</h1>
              <ul>
                {user.Freelancer.projectDetails.portfolio.map((val, idx) => {
                  return (
                    <li key={idx}>
                      <Image
                        src={val}
                        width="300px"
                        height="200px"
                        alt="Portfolio"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr />
            <div className={styles["right-rv"]}>
              <h1>
                Reviews (
                {("0" + user.Freelancer.projectDetails.reviews.length).slice(
                  -2
                )}
                )
              </h1>
              <ul>
                {user.Freelancer.projectDetails.reviews.map((val) => {
                  return (
                    <li key={val.id}>
                      <div>
                        <h1>{val.name}</h1>
                        <aside></aside>
                      </div>
                      <p>{val.reviewDetails}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </section>
        <section className={styles["packages"]}>
          <ul>
            {user.Freelancer.projectDetails.packages.map((val, idx) => {
              return (
                <li key={idx}>
                  <h1>{val.packageName}</h1>
                  <h2>${val.cost.toFixed(2)}~</h2>
                  <p>{val.details}</p>
                  <button>CONTACT</button>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default details;
