import styles from "../../styles/Login.module.css";
import Link from "next/link";
import freelanceLogo from "../../public/images/canadaFreelanceLogo.png";
import Image from "next/image";
import profile from "../../public/images/profile.png";
const Login = () => {
  return (
    <div>
    <nav className={styles["nav_container"]}>
    <Image src={freelanceLogo} width={200} height={60} />          
    </nav>  
    <fieldset className={styles["fieldset_container"]}>
      <div className={styles["login_container"]}>
            <h1>Log in to CanadaFreelancers</h1>
          <form className={styles["form_container"]}>
            <input type="email" placeholder="Username or Email" name="email" className={styles["email_input"]} required>
             
            </input>
            <button className={styles["login_button"]}>Login with Email</button>
            <h1>Or</h1>
            <button className={styles["google_button"]}>Continue with Google</button>
            <button className={styles["apple_button"]}>Continue with Apple</button>
            <h2>Don't have an account?</h2> 
            <button className={styles["signup_button"]}>SignUp</button>
          </form> 
       </div>       
    </fieldset>         
      </div>
  );
};

export default Login;

