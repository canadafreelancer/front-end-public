import styles from "../../styles/Contact.module.css";
import Link from "next/link";

export default function Contact(){
  const sendEmail = (event)=>{
    //To be applied email.js
    event.preventDefault();
  }
  return(
    <section className={styles["contact_layout"]}>
      <article className={styles["contact_article_layout"]}>
          <h3 className={styles["contact_title"]}>Contact our team</h3>
          <p className={styles["contact_p"]}>Thank you for being interested in our team! Need to get in touch with us? Please fill out the form with your inquiry.</p>
          <ul className={styles["contact_ul"]}>
            <li>
              <span>Phone: </span>
              <Link href="tel:1111111111"><a className={styles["contact_a"]}>000-000-0000</a></Link>
            </li>
            <li>
              <span>Email: </span>
              <Link href="mailto:company@gmail.com"><a className={styles["contact_a"]}>company@gmail.com</a></Link>
            </li>
            <li>Address : Vancouver, British Colimbia, Canada</li>
          </ul>
        </article>
        <form className={styles["contact_article_form"]} onSubmit={sendEmail}>
          <input type="text" name="cName" placeholder="Your Name"/>
          <input type="email" name="cEmail" placeholder="Your Email"/>
          <input type="tel" name="cPhone" placeholder="Your Phone Number"/>
          <textarea name="content" placeholder="Your Message"/>
          <button>SEND MESSAGE</button>
        </form>
    </section>
  )
}