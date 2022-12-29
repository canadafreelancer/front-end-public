
import styles from "../../styles/SignUpClient.module.css";
import Link from "next/link";
import freelanceLogo from "../../public/images/canadaFreelanceLogo.png";
import Image from "next/image";
import googleic from "../../public/images/googleicon.png";
import appleic from "../../public/images/appleicon.png";
import Dropdown3 from "../../Components/Signups/Dropdown3";
import ClientImage from "../HeaderImage/ClientImage";

function SignUpClient() {
   

    return (
        <section className={styles["section_container"]}>
        <nav className={styles["nav_container"]}>
        <div className={styles["image_container"]}>
        <Image src={freelanceLogo} width={120} height={28}/>
         </div>
        <ul className={styles["menu_list--option"]}>
        <li>
          <Link href="/HowItWorksPage">
          <a className={styles["job_links"]}>How it works</a> 
          </Link>
          </li>  
          <li>
         <Link href="/freelancers">
          <a className={styles["job_links"]}>Find Talents</a>
          </Link>
         </li>      
        </ul>  
        </nav> 
            <fieldset className={styles["fieldset_container"]}>
             <div className={styles["signup_container"]}>
             <h1>Sign up as a client </h1>       
             <form className={styles["form_container"]}>
             <button className={styles["google_button"]}>Continue with Google</button>
             <div className={styles["image_field"]}><Image src={googleic} width={14} height={15}/></div>
             <button className={styles["apple_button"]}>Continue with Apple</button> 
             <div className={styles["image_field_apple"]}><Image src={appleic} width={14} height={15}/></div>
             <h1>Or</h1> 
             <input type="text" placeholder="First name" name=" First name" className={styles["firstname_input"]} required />   
             <input type="text" placeholder="Last name" name=" Last name" className={styles["lastname_input"]} required/>            
             <input type="email" placeholder="Work email address" name="email" className={styles["email_input"]} required />
             <input type="password" placeholder="Password" name="password" className={styles["password_input"]} required />  
             <Dropdown3 /> 
             <div>          
             <input type="checkbox" className={styles["check1"]} value="coding" required /> 
             </div>         
             <p>Yes i understand and agree to the CanadaFreelancers terms of service,<br/>also the User Agreement and Privacy policy.</p>   
             <button className={styles["signup_button"]}>Create Account</button>                  
             </form>      
            </div>
            </fieldset>
        </section>
    );  
}
export default SignUpClient;