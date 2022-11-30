import React from "react";
import styles from "../../styles/SignUp.module.css";
import Link from "next/link";
import freelanceLogo from "../../public/images/canadaFreelanceLogo.png";
import Image from "next/image";


const SignUp = () => {
    return (
    <div>
    <nav className={styles["nav_container"]}>
    <Image src={freelanceLogo} width={200} height={60} />            
    </nav>  
    <fieldset className={styles["fieldset_container"]}>
      <div className={styles["signup_container"]}>
            <h1>Join as a client or freelancer</h1>
          <form className={styles["form_container"]}>
              <label className={styles["label_container"]}>
                <div className={styles["label_content"]}  >
                <span>I'm a client, hiring for a project.</span>
                </div>
                <input type="radio" name="freelancer"   className={styles["radio"]} /> 
              </label> 
              <label className={styles["label_container"]}>
                <div className={styles["label_content"]} >
                <span>I'm a freelancer, looking for work</span>
                </div>
                <input type="radio"  name="freelancer"    className={styles["radio"]} />
              </label> 
              <button className={styles["label_button"]}>Join</button>
          </form>
          <span className={styles["login"]}>Already have an account?<Link href="/LoginPage">Log in</Link></span>
             </div>       
    </fieldset>         
      </div>
    );
  };
  
  export default SignUp; 