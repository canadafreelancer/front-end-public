import React from 'react'
import Link from 'next/link'
import Image from 'next/Image'
import home from '../../public/images/home.svg'
import styles from '../../styles/Bar.module.css'

const Bar = () => {
  return (
    <div className={styles["parent_container"]}>
        <div className={styles["home-icon"]}><Link href=''>
                <a><Image src={home} width={20} height={20} /></a>
            </Link>
            <Link href=''>
                <a className={styles["home-btn"]}>HOME</a>
            </Link>
        </div>
        <div className={styles["col-2"]}>
            &gt; <p>POST A PROJECT</p>
        </div>
    </div>
  )
}

export default Bar
