import React from 'react'
import styles from '../../styles/FormPlate.module.css'


const FormPlate = () => {
  return (
    <div className={styles["parent-container"]}>
      <div className={styles["container"]}>
        <div className={styles["container-control"]}>
          <h3>Project Name</h3>
          <input type="text" className={styles["form-con"]} placeholder="Enter Project title" required />
          </div>

          <div className={styles["category-type"]}>
          <h3>Category Type</h3>
          <select className={styles["select-category"]} required>
            <option className={styles["option"]}>Select</option>
            <option className={styles["option"]}>Tech & Programming</option>
            <option className={styles["option"]}>Design & Creative</option>
            <option className={styles["option"]}>Sales & Marketing</option>
            <option className={styles["option"]}>Writing & Translation</option>
            <option className={styles["option"]}>Video & Animation</option>
            <option className={styles["option"]}>Lifestyle</option>
            <option className={styles["option"]}>Music & Audio</option>
            <option className={styles["option"]}>Business</option>
          </select>
          </div>

          <div className={styles["form-group"]}>
            <h3>Desired areas of expertise</h3>
            <input type="text" className={styles["form-group-1"]} placeholder="UI/UX, Web Design, Andriod Developer" required/>
            <p>Enter skills for needed for project</p>
          </div>

          <div className={styles["pricing-type"]}>
          <h3>Pricing Type</h3>
          <select className={styles["select-pricing"]} required>
            <option className={styles["option"]}>Select</option>
            <option className={styles["option"]}>Fixed Budget Price</option>
            <option className={styles["option"]}>Hourly Pricing</option>
            <option className={styles["option"]}>Biding Pricing</option>
          </select>
          </div>

          <div className={styles["form-doc"]}>
            <h3>Add Documents</h3>
            <div className={styles["form-doc-1"]}>
            <a>Upload</a>
            <input type="file" required size={2}/>
            </div> 
            <p>Size of the Document should be Below 2MB</p>
          </div>

          <div className={styles["add-link"]}>
            <h3>Add Links</h3>
            <input type="textarea"  className={styles["textarea"]} required/>
            <p>Add Reference links if any</p>
          </div>

          <button className={styles["submit-btn"]}>Submit</button>
      </div>

    </div>
  )
}

export default FormPlate