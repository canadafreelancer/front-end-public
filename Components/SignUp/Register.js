import React, { useState } from "react";
import styles from "../../styles/SignUp.module.css";
import Link from "next/link";
import { FaRegNewspaper, FaUserCheck } from "react-icons/fa";

const Register = () => {
  const [isClientSelected, setIsClientSelected] = useState(false);
  const [isFreelanceSelected, setIsFreelanceSelected] = useState(false);

  //handle radio button selection for client
  const handleClientInputChange = () => {
    setIsClientSelected(true);
    setIsFreelanceSelected(false);
  };

  const handleFreelanceInputChange = () => {
    setIsFreelanceSelected(true);
    setIsClientSelected(false);
  };

  return (
    <div className={styles["register__container"]}>
      <div className={styles["register__container--section"]}>
        <h1>Join as a client or freelancer</h1>
        <section className={styles["register__section"]}>
          <div className={styles["register__section--boxes"]}>
            <label
              className={
                isClientSelected
                  ? styles["register__section--background"]
                  : styles["register__section--label"]
              }>
              <div className={styles["register__input--container"]}>
                <FaRegNewspaper className={styles["register__icon"]} />
                <input
                  type="radio"
                  name="freelancer"
                  onClick={handleClientInputChange}
                />
              </div>
              <p className={styles["register__details"]}>
                I'm a client, hiring for a project.
              </p>
            </label>
            <label
              className={
                isFreelanceSelected
                  ? styles["register__section--background"]
                  : styles["register__section--label"]
              }>
              <div className={styles["register__input--container"]}>
                <FaUserCheck className={styles["register__icon"]} />
                <input
                  type="radio"
                  name="freelancer"
                  onClick={handleFreelanceInputChange}
                />
              </div>
              <p className={styles["register__details"]}>
                I'm a freelancer, looking for work
              </p>
            </label>
          </div>

          <div className={styles["register__btnContainer"]}>
            {isClientSelected ? (
              <Link href="register_details">
                <button>Join as client</button>
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className={styles["register__btnContainer"]}>
            {isFreelanceSelected ? (
              <Link href="register_details">
                <button>Join as freelancer</button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </section>
        <div className={styles["register__loginContainer"]}>
          Already have an account?<Link href="/LoginPage">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
