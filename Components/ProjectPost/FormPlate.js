import React from "react";
import styles from "../../styles/FormPlate.module.css";

const FormPlate = () => {
  return (
    <div className={styles["parent-container"]}>
      <form className={styles["form__container"]}>
        <div className={styles["container__project"]}>
          <h3>Project Name</h3>
          <input
            type="text"
            className={styles["form__input"]}
            placeholder="Enter Project title"
            required
          />
        </div>

        <div className={styles["category-container"]}>
          <h3>Category Type</h3>
          <select required className={styles["form__input"]}>
            <option>Select</option>
            <option>Tech & Programming</option>
            <option>Design & Creative</option>
            <option>Sales & Marketing</option>
            <option>Writing & Translation</option>
            <option>Video & Animation</option>
            <option>Lifestyle</option>
            <option>Music & Audio</option>
            <option>Business</option>
          </select>
        </div>

        <div className={styles["expertise__container"]}>
          <h3>Desired areas of expertise</h3>
          <input
            type="text"
            placeholder="UI/UX, Web Design, Andriod Developer"
            required
            className={styles["form__input"]}
          />
        </div>

        <div className={styles["pricing__container"]}>
          <h3>Pricing Type</h3>
          <select className={styles["form__input"]} required>
            <option>Select</option>
            <option>Fixed Budget Price</option>
            <option>Hourly Pricing</option>
            <option>Biding Pricing</option>
          </select>
        </div>

        <div>
          <h3>Add Documents</h3>
          <div>
            <input
              type="file"
              required
              size={2}
              className={styles["form__input"]}
            />
          </div>
          <p>Size of the Document should be below 2MB</p>
        </div>

        <div className={styles["addLinks__container"]}>
          <h3>Add Links</h3>
          <input
            type="text"
            required
            className={styles["form__input"]}
            placeholder="Add reference if any"
          />
        </div>
        <div>
          <h3>Write description of project</h3>
          <textarea
            id="desc"
            name="desc"
            className={styles["form__input"]}
            placeholder="Add project details"></textarea>
        </div>
        <div>
          <button type="submit" className={styles["form__btn"]}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPlate;
