import React from "react";
import services from "../../utils/ServicesData";
import styles from "../../styles/Services.module.css";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import Link from "next/link";

function Services() {
  return (
    <>
      <section className={styles["services_container"]}>
        <p>Freelancing talent at your fingertips at a reasonable cost</p>
        <div className={styles["services_steps"]}>
          <div className={styles["services_details"]}>
            <RiNumber1 className={styles["services_num"]} />
            <p>Describe what you are looking for</p>
          </div>
          <div className={styles["services_details"]}>
            <RiNumber2 className={styles["services_num"]} />
            <p>Set your budget </p>
          </div>
          <div className={styles["services_details"]}>
            <RiNumber3 className={styles["services_num"]} />
            <p>Receive bids & select the best person</p>
          </div>
        </div>

        <h2>Choose from a wide variety of service</h2>
        <ul className={styles["services_lists_wrapper"]}>
          {services.map((service) => (
            <Link href={service.path}>
              <li key={service.id}>
                <div className={styles["service_cat"]}>
                  <div className={styles["service_icon"]}>{service.icon}</div>
                  <h3>{service.category}</h3>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Services;
