// components/Hero.js
import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setSectionTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dynamicStyle = {
    top: `-${sectionTop}px`,
  };

  return (
    <section className={styles.heroSection} style={dynamicStyle}>
      <h1>Hi, my name is</h1>
      <h2>Ankit Sawant.</h2>
      <h3>I'm a Data Enthusiast.</h3>
      <p className={styles.pStyle}>
        I’m a graduate student at University of Illinois at Urbana-Chamapign.I’m passionate about leveraging data to solve complex problems and uncover actionable insights.
      </p>
      <a
        className={styles.emailLink}
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Check out my Resume!
      </a>
    </section>
  );
};

export default Hero;
