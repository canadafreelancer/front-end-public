import Link from "next/link";
import React from "react";
import styles from "../../styles/SignUp.module.css";
import google from "../../public/images/googleicon.png";
import apple from "../../public/images/appleicon.png";
import Image from "next/image";

function Form() {
  //handle form details
  const handleFormSubmission = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles["forms__container"]}>
        <section className={styles["form__body"]}>
          <div className={styles["form__body--caption"]}>
            <h2>Sign Up To Canada Freelancers</h2>
            <div className={styles["form__social-signup"]}>
              <Link href="/">
                <div className={styles["form__social-btn"]}>
                  <button>
                    <Image src={google} width="20" height="20" />
                    Continue with Google
                  </button>
                </div>
              </Link>
              <Link href="/">
                <div className={styles["form__social-btn"]}>
                  <button>
                    <Image src={apple} width="20" height="20" />
                    Continue with Apple
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <form
            className={styles["form__details"]}
            onSubmit={handleFormSubmission}>
            <div>
              <input
                type="text"
                placeholder="First Name"
                className={styles["form__details--input"]}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className={styles["form__details--input"]}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className={styles["form__details--input"]}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className={styles["form__details--input"]}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="confirm password"
                className={styles["form__details--input"]}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="city"
                className={styles["form__details--input"]}
                required
              />
            </div>
            <button className={styles["form--btn"]}>Create Account</button>
          </form>
          <div className={styles["form__login--container"]}>
            <h3>Already have an account ? </h3>
            <div className={styles["form__login--btn"]}>
              <Link href="/register/login">
                <h4>Login</h4>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Form;
