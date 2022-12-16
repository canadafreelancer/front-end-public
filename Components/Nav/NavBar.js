import React, { useState, useEffect } from "react";
import styles from "../../styles/NavBar.module.css";
import freelanceLogo from "../../public/images/canadaFreelanceLogo.png";
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { GiPadlockOpen } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

function NavBar() {
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [isMenuClicked, setisMenuClicked] = useState(false);

  const stickyNavBar = () => {
    const windowHeight = window.scrollY;
    windowHeight > 100 ? setIsStickyNav(true) : setIsStickyNav(false);
  };
  const handleMenuClick = () => {
    setisMenuClicked(!isMenuClicked);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNavBar);
  }, []);
  return (
    <div
      className={`${styles["navBar--container"]} ${
        isStickyNav && styles["nav--sticky"]
      }`}>
      <div className={styles["navBar__brand"]}>
        <Image src={freelanceLogo} width={200} height={50} />
      </div>
      <div className={styles["nav_menu-icon"]} onClick={handleMenuClick}>
        {isMenuClicked ? <FaTimes /> : <AiOutlineMenu />}
      </div>
      <nav
        className={`${
          isMenuClicked ? styles["nav_menu-mobile"] : styles["navBar--menus"]
        } `}>
        <ul className={styles["navBar--menus_items"]}>
          
          <li>
          <Link href="/HowItWorksPage">
          <a className={styles["navBar--menu_links"]}> How it works</a> 
          </Link>
          </li>
            
          <li>
            <Link href="/freelancers">
          <a className={styles["navBar--menu_links"]}>Find Talents</a>
          </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className={styles["navBar--menu_links"]}>Find Jobs</a>
            </Link>
          </li>
        </ul>
        <div className={styles["navBar--cta"]}>
          <ul className={styles["navBar--menus_items"]}>
            <li> 
              <GiPadlockOpen className={styles["navBar--icon"]} />
                Login
            </li>
            <li>
              <BiUserCircle className={styles["navBar--icon"]} />
              Register
            </li>
            <button className={styles["navBar--menu_btnPost"]}>
              Post a project
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
