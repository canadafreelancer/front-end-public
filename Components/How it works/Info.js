import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Info.module.css";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import worker from "../../public/images/man.png";
import client from "../../public/images/client.jpg";
import picture from "../../public/images/HeroImg.png";
import customer from "../../public/images/remote.png";
import icon from "../../public/images/flowchart.png";
import icon2 from "../../public/images/credit-card.png";
import icon3 from "../../public/images/clipboard.png";
import icon5 from "../../public/images/padlock.png";
import icon6 from "../../public/images/support.png";
import icon8 from "../../public/Images/chat.png";
import icon9 from "../../public/Images/marker.png";
import { RiNumber1, RiNumber2, RiNumber3 , RiNumber4 } from "react-icons/ri";
import HeaderImage from "../HeaderImage/HeaderImage";


const Info = () => {
  const Menus = ["Employers", "Freelancers"]
  const [myMenus, setMyMenus] = useState("");


  return (
    <div className={styles["container"]} >
      <div className={styles["header-image__container"]}>
        <HeaderImage /> 
      <div className={styles["title_container"]}>
        {Menus.map(Menu => (
          <p className={styles["tab_links"]} id="active_link" key={Menu} onClick={() => setMyMenus(Menu)}>
            {Menu.toLocaleUpperCase()}
          </p>
        ))}
      </div>
      </div>
      <div className={styles["content_container"]}>
        <p>{myMenus === "Employers" && <h1>The possibilites are endless</h1>}</p>
        <p>{myMenus === "Employers" && <p className={styles["first_paragraph"]}> We have expert freelancers who work in every
          technical,professional and creative field.
        </p>}</p>
        <div className={styles["employeer_first_section"]}>
          <div className={styles["column-1"]}>
          <div className={styles["image_box_1"]}>
          {myMenus === "Freelancers" && (<MenuImage10 src={worker}/>
          )}
        </div>  
        <div className={styles["image_box"]}>
          {myMenus === "Freelancers" && (<MenuImage4 src={client}/>
          )}
        </div>
       </div>
          <div className={styles["column-2"]}>
            {myMenus === "Freelancers" && (<h1>How do i get started?</h1>
        )}
         {myMenus === "Freelancers" && (<RiNumber1 className={styles["services_number"]} />
            )}
           {myMenus === "Freelancers" && (<h2 className={styles["first_heading"]}>Complete and set up your profile</h2>
            )}
            {myMenus === "Freelancers" && (<p>Select your skills or expertise and upload a professional photo
              and recieve competitive bids from freelancers within minutes.
            </p>
            )}
            {myMenus === "Freelancers" && (<RiNumber2 className={styles["services_number"]} />
            )}
            {myMenus === "Freelancers" && (<h2 className={styles["heading-2"]}>Browse jobs that suits you</h2>
            )}
             {myMenus === "Freelancers" && (<p> Here we have jobs available for all skills and expertise levels. Save your search
              and recieve alerts when jobs are available .
            </p>
            )}
             {myMenus === "Freelancers" && (<RiNumber3 className={styles["services_number"]} />
            )}
            {myMenus === "Freelancers" && (<h2 className={styles["heading-3"]}>Submit a decent proposal</h2>
            )}
             {myMenus === "Freelancers" && (<p>Simply put your best foot foward and write the best bid possible
              by Reading the project and let the clients know you are fit for it.
            </p>  
            )}
              {myMenus === "Freelancers" && (<RiNumber4 className={styles["services_number"]} />
            )}
            {myMenus === "Freelancers" && (<h2 className={styles["heading-3"]}>Earn and get paid for work </h2>
            )}
             {myMenus === "Freelancers" && (<p>Get ready to work as soon as you get hired. Deliver high quality
              and recieve planned payments from client after completion.
            </p>  
            )}
              {myMenus === "Freelancers" && (<button className={styles["button_freelancer"]}>Apply now 
            </button>  
          )}
          </div>
          </div>
        <div className={styles["image_wrapper"]} id={styles["employeer_first_section"]}>
          {myMenus === "Employers" && (<MenuImage src={icon} />
          )}
           {myMenus === "Employers" && (<MenuImage2 src={icon2} />
          )}
           {myMenus === "Employers" && (<MenuImage3 src={icon3} />
          )}
              
        </div>
        <div className={styles["text_wrapper"]}>
          {myMenus === "Employers" && (<h1> All sized projects</h1>
          )}
           {myMenus === "Employers" && (<h1>Flexible payment terms</h1>
          )}
           {myMenus === "Employers" && (<h1>World class talents</h1>
          )}
        </div>
        <div className={styles["paragraph_wrapper"]}>
          {myMenus === "Employers" && (<p>Get any job done. from small scale to large scale projects</p>
          )}
           {myMenus === "Employers" && (<p>Make fixed payments or pay hours. All secured by etransfer payment system</p>
          )}
           {myMenus === "Employers" && (<p>Access expert freelancers with over 1800 skill set around the world</p>
          )}
        </div>
        <div className={styles["second_section"]}>
        <div className={styles["COL_1"]}>
        {myMenus === "Employers" && (<h1>How does it work?</h1>
        )}
         {myMenus === "Employers" && (<RiNumber1 className={styles["services_num"]} />
            )}
           {myMenus === "Employers" && (<h2>Make a job post or offer</h2>
            )}
            {myMenus === "Employers" && (<p>Simply make a job post or project post on what you need done
              and recieve competitive bids from freelancers within minutes.
            </p>
            )}
            {myMenus === "Employers" && (<RiNumber2 className={styles["services_num"]} />
            )}
            {myMenus === "Employers" && (<h2 className={styles["heading-2"]}>Choose the perfect talent for the job</h2>
            )}
             {myMenus === "Employers" && (<p>Simply make a job post or project post on what you need done
              and recieve competitive bids from freelancers within minutes.
            </p>
            )}
             {myMenus === "Employers" && (<RiNumber3 className={styles["services_num"]} />
            )}
            {myMenus === "Employers" && (<h2 className={styles["heading-3"]}>Pay when you're satisfied</h2>
            )}
             {myMenus === "Employers" && (<p>Simply make a job post or project post on what you need done
              and recieve competitive bids from freelancers within minutes.
            </p>  
            )}
              {myMenus === "Employers" && (<button className={styles["button"]}>post a job
            </button>  
            )}
            <div className={styles["free_section"]}>
          <div className={styles["sec_1"]}>
          {myMenus === "Freelancers" && (<h1>Safe and Secure</h1>
        )}
        {myMenus === "Freelancers" && (<p>CanadaFreelancers is a community that values your safety as our number 1 piority.
           </p>
                )}
         <div className={styles["wrapper"]}>
           {myMenus === "Freelancers" && (<MenuImage5 src={icon5} />
          )}
           {myMenus === "Freelancers" && (<MenuImage6 src={icon6} />
          )}
        </div>
        <div className={styles["head_wrapper"]}>
        {myMenus === "Freelancers" && (<h1>Your security</h1>
                  )}
          {myMenus === "Freelancers" && (<h1> 24/7 support team</h1>
        )}        
          </div>      
          <div className={styles["sub-text_wrapper"]}>
        {myMenus === "Freelancers" && (<MenuImage8 src={icon8} />
                  )}
          {myMenus === "Freelancers" && (<MenuImage9 src={icon9} />
        )}        
      </div>
      <div className={styles["second_head_wrapper"]}>
        {myMenus === "Freelancers" && (<h1>Easy Communication</h1>
                  )}
          {myMenus === "Freelancers" && (<h1> Bringing Canada freelancers together</h1>
        )}        
          </div>        
       </div> 
            <div className={styles["sec_2"]}>
           <div className={styles["image_field"]} >
           {myMenus === "Freelancers" && (<MenuImage7 src={customer} />
          )}     
            </div>
          </div> 
          </div>
          </div>
          <div className={styles["COL_2"]}> 
          <div className={styles["image_container"]}>
          {myMenus === "Employers" && (<MenuImage4 src={picture} />
          )}
        </div>
          </div>
        </div>
        <div className={styles["footer"]} >
        <Footer />
      </div>
      </div>
    </div>

  );
};
const MenuImage = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={53}
      height={48}
      layout="fixed"
    />
  );
 }
const MenuImage2 = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={53}
      height={48}
      layout="fixed"
    />
  );
}
const MenuImage3 = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={53}
      height={48}
      layout="fixed"
    />
  );
}
const MenuImage4 = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={550}
      height={550}
      layout="fixed"
    />
  );
}
const MenuImage5 = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={50}
      height={50}
      layout="fixed"
    />
  );
}
const MenuImage6 = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={50}
      height={50}
      layout="fixed"
    />
  );
}
const MenuImage7 = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={510}
      height={500}
      layout="fixed"
    />
  );
}
const MenuImage8  = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={50}
      height={50}
      layout="fixed"
    />
  );
}
const MenuImage9  = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={55}
      height={54}
      layout="fixed"
    />
  );
}
const MenuImage10  = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      width={400}
      height={400}
      layout="fixed"
    />
  );
}




export default Info;