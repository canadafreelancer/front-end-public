import styles from "../../styles/Login.module.css";
import Link from "next/link";
import Email from "../../public/images/email.png";
import Lock from "../../public/images/lock.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className={styles["login__container"]}>
      <div className={styles["login__body"]}>
        <div className={styles["login__heading"]}>
          <h2>Log in to Canada Freelancers</h2>
          <p>Enter your email address and password.</p>
        </div>
        <form className={styles["form__container"]}>
          <div className={styles["form__details"]}>
            <Image
              src={Email}
              width={30}
              height={30}
              className={styles["form__icon"]}
            />
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              className={styles["form__input"]}
            />
          </div>

          <div className={styles["form__details"]}>
            <Image
              src={Lock}
              width={30}
              height={30}
              className={styles["form__icon"]}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className={styles["form__input"]}
            />
          </div>
          <Link href="#">
            <button className={styles["form__btn"]}>Log in</button>
          </Link>

          <Link href="/">
            <a>Forgot your password?</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
