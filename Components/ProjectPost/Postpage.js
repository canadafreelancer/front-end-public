import React from 'react'
import Image from 'next/image'
import canadaFreelanceLogo from '../../public/images/canadaFreelanceLogo.png'
import styles from '../../styles/PostPage.module.css'
import caretDown from '../../public/images/caretDown.svg'

const PostPage = () => {
  return (
    <div className={styles["container"]}>
      <Image className={styles["container-logo"]} src={canadaFreelanceLogo} width={180} height={57} />
      <nav className={styles["container-link"]}>
        <ul>
            <li>Home<Image src={caretDown} /></li>
            <li>For Employer<Image src={caretDown} /></li>
            <li>For Freelancer<Image src={caretDown} /></li>
            <li>Pages<Image src={caretDown} /></li>
            <li>Blog<Image src={caretDown} /></li>
            <li>Admin</li>
            <li className={styles["my-account"]}>MY ACCOUNT<Image src={caretDown} /></li>
          </ul>
        </nav>
            <button className={styles["project-btn"]}>POST A PROJECT</button>
    </div>
  )
}

export default PostPage
