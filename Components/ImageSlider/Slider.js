import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Slider.module.css";
import { CgChevronRightR, CgChevronLeftR } from "react-icons/cg";

function Slider({ portfolio }) {
  const [current, setCurrent] = useState(0);
  const length = portfolio.length;

  const showNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const showPrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(portfolio) || portfolio.length <= 0) {
    return null;
  }
  return (
    <>
      <section className={styles["slider__container"]}>
        <CgChevronLeftR
          onClick={showPrevSlide}
          className={styles["slider__leftArr"]}
        />
        <CgChevronRightR
          onClick={showNextSlide}
          className={styles["slider__rightArr"]}
        />

        {portfolio.map((portfolio, index) => {
          return (
            <div
              key={index}
              className={`${styles["portfolio__img"]}  ${
                index === current ? styles["slide__active"] : styles["slide"]
              }`}>
              {index === current && (
                <Image src={portfolio.img} alt="Slider" layout="fill" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Slider;
