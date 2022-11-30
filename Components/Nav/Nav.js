import React, { useState, useEffect } from "react";
import styles from "../../styles/Nav.module.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import freelanceLogo from "../../public/images/canadaFreelanceLogo.png";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [isMenuClicked, setisMenuClicked] = useState(false);

  const stickyNavBar = () => {
    const windowHeight = window.scrollY;
    windowHeight > 200 ? setIsStickyNav(true) : setIsStickyNav(false);
  };

  const handleMenuClick = () => {
    setisMenuClicked(!isMenuClicked);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNavBar);
  }, []);

  return (
    <div>
      <nav
        className={`${styles["nav_container"]} ${
          isStickyNav && styles["nav_sticky"]
        }`}>
        <Image src={freelanceLogo} width={200} height={80} />

        <div className={styles["nav_menu-icon"]} onClick={handleMenuClick}>
          {isMenuClicked ? <FaTimes /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`${
            isMenuClicked ? styles["nav_menu-mobile"] : styles["nav_menu"]
          }`}>
          <li>
            <Link href="/projects">Find Jobs</Link>
          </li>
          <li><Link href="/freelancers"><a className={styles["login"]}>Find Freelancers</a></Link></li>
          <li><Link href="/LoginPage"><a className={styles["login"]} >Login</a></Link></li>
          <li><Link href="/SignupPage"><a className={styles["signup"]} >SignUp</a></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
