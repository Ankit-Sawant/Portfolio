// components/About.js
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.styledSection}>
      <section>
        <div className={styles.styledAbout}>
          <div>
            <h2>About Me</h2>
          </div>
        </div>
        <div className={styles.inner}>
          <div>
            <div className={styles.styledP}>
              <p>
                Hey! I'm  Ankit, I am currenlty doing my Master's in Information Management from University of Illinois at Urbana-Champaign
              </p>
              <p>
                I did my Bachelors in Electronics and Telecommunication with honours in Artifical Intelligence and Machine Learning from Dwarkadas J. Sanghvi College of Engineering.
              </p>
              <p>
              As I continue to delve deeper into the vast field of data, I am passionate about uncovering insights and driving meaningful decisions through innovative analytics and technology. I am excited to tackle complex challenges, embrace emerging tools and techniques, and contribute to transformative projects that harness the power of data to make a tangible difference.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <div className={styles.styledText}>
              <ul className={styles.skills}>
                <li>Python</li>
                <li>R</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Tableau/PowerBi</li>
                {/* <li></li> */}
              </ul>
            </div>
          </div>
          <div className={styles.aboutPic}>
            <div className={styles.wrapper}>
              <img
                src="/ankit_image.jpg"
                alt="photo of Ankit Sawant"
                className={styles.wrapperimg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
