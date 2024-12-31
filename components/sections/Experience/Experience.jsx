import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState("0");
  console.log("slectd", selectedJob);
  const [transformDirection, setTransformDirection] = useState("translateY");

  const jobs = [
    {
      id: 0,
      title: "Data Analyst",
      company: "Bharaj Machineries",
      date: "March 2023 - May 2023",
      responsibilities: [
        `Used Python to clean and process over 10,000 data entries from multiple sources, improving data integrity. `,
        "Generated PowerBi dashboards and presented reports & presentations summarising data analysis results, aiding decision-making. ",
      ],
    },
    {
      id: 1,
      title: "App Developer",
      company: "RAA Technocrates",
      date: "April 2022 - July 2022",
      responsibilities: [
        "As an App Developer, I developed  and maintained software applications, improving overall system performance and functionality",
        "Collaborated with the engineering team to design, implement and test software solutions reducing bugs and improving software quality",
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setTransformDirection("translateX");
      } else {
        setTransformDirection("translateY");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.styledSection}>
      <section>
        <h2 className={styles.styledExp}>Experience</h2>
        <div className={styles.inner}>
          <div className={styles.tabsDiv}>
            {Object.keys(jobs).map((jobKey) => (
              <button
                key={jobKey}
                className={`${styles.styledButton} ${
                  selectedJob === jobKey ? styles.active : ""
                }`}
                onClick={() => setSelectedJob(jobKey)}
              >
                {jobs[jobKey].company}
              </button>
            ))}
            <div
              className={styles.selected}
              style={{
                transform: `${
                  transformDirection === "translateY"
                    ? `translateY(calc(${jobs[selectedJob].id} * var(--tab-height)))`
                    : `translateX(calc(${jobs[selectedJob].id} * var(--tab-width)))`
                }`,
              }}
            ></div>
          </div>
          <div>
            <div className={styles.styledInner}>
              <h3>
                <span>{jobs[selectedJob].title}</span>
                <span className={styles.company}>&nbsp;@&nbsp;</span>
                <a href="" className={styles.company}>
                  {jobs[selectedJob].company}
                </a>
              </h3>
              <p className={styles.date}>{jobs[selectedJob].date}</p>
              <div>
                <ul>
                  {jobs[selectedJob].responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
