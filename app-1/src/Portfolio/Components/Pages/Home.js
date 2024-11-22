import React from 'react';
import styles from '../../Styles/Home.module.css';
import { Link } from 'react-router-dom';

function Home()  {
  return (
  <div className={styles.home}>
      <div className={styles.section}>
        <div className={styles.imageContent}>
          <img 
            src="../../IMG_20240930_225514_471.webp" 
            alt="Franky Feson" 
            className={styles.profileImage} 
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Hi There, I'm <span className={styles.highlight}>Franky Feson</span>
          </h2>
          <p className={styles.description}>
            Aspiring Web Developer with a passion for crafting sleek, modern, and fully responsive websites. 
            I thrive on translating creative ideas into engaging digital experiences. Let's build something amazing together! 
            Explore my portfolio to learn more about me!
            </p>
          {/*<p className={styles.description}>*/}
          {/*</p>*/}
          <div className={styles.buttons}>
            <Link to="/about">
              <button className={styles.learnMoreBttn}>Learn More</button>
            </Link>
            <Link to="/contact">
              <button className={styles.primaryButton}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;