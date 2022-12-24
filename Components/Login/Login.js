import styles from "../../styles/Login.module.css";
import Link from "next/link";
import freelanceLogo from "../../public/images/canadaFreelanceLogo.png";
import Email from "../../public/images/email.png";
import Lock from "../../public/images/lock.png"
import Image from "next/image";





const Login = () => {
  return (
    <div>
    <nav className={styles["nav_container"]}>
    <div className={styles["Logo_container"]}>
    <Image src={freelanceLogo} width={200} height={60}/>
    </div>          
    </nav>  
    <fieldset className={styles["fieldset_container"]}>
      <div className={styles["login_container"]}>
            <h1>Log in to CanadaFreelancers</h1>
            <p>Enter your email address and password.</p>
          <form className={styles["form_container"]}>
            <input type="email" placeholder="Username or Email" name="email" className={styles["email_input"]} required></input>
            <div className={styles["icon_container"]}><Image src={Email}  width={15} height={15}/></div>
            <input type="password" placeholder="Password" name="password" className={styles["password_input"]} required />
            <div className={styles["lock_container"]}><Image src={Lock}  width={15} height={15}/></div>
             <Link href="">
              <a className={styles["link_container"]}>Forgot your password?</a>
             </Link>
             <button className={styles["log-in_button"]}>Log in</button>
          </form> 
       </div>       
    </fieldset>          
      </div>
  );
};

export default Login;

