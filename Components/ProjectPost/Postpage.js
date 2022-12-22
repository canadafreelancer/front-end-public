import React from 'react'
import Image from 'next/image'
import canadaFreelanceLogo from '../../public/images/canadaFreelanceLogo.png'
import styles from '../../styles/PostPage.module.css'
import caretDown from '../../public/images/caretDown.svg'

const PostPage = () => {
  return (
    <div className={styles["container"]}>
      <Image className={styles["container-logo"]} src={canadaFreelanceLogo} width={200} height={63} />
      <nav className={styles["container-link"]}>
        <ul>
            <li>Home<Image src={caretDown} /></li>
            <li>For Employer<Image src={caretDown} /></li>
            <li>For Freelancer<Image src={caretDown} /></li>
            <li>Pages<Image src={caretDown} /></li>
            <li>Blog<Image src={caretDown} /></li>
            <li>Admin</li>
        </ul>
        </nav>
        <a className={styles["my-account"]}>MY ACCOUNT<Image src={caretDown} /></a>
        <button className={styles["p-project"]}>POST A PROJECT</button>
    </div>
  )
}

export default PostPage
