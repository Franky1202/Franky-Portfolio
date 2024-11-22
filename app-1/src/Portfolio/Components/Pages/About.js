import React from 'react';
import styles from '../../Styles/About.module.css';

function About() {
  return (
  <div className={styles.about}>
    <div className={styles.aboutContainer}>
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <img src="../../../Franky-SPP-soft.jpg" alt="Franky Feson" className={styles.profileImage} />
          <h2>Franky-John Fada Feson</h2>
          <p>Nigerian | Aspiring Web Developer</p>
        </div>
        <div className={styles.aboutSection}>
          <h3>About Me</h3>
          <p>
            Hi, I'm Franky Feson, an aspiring web developer with a passion for crafting elegant and efficient designs.
            Born and raised in Nigeria for 9 years, I later moved to South Africa, where my love for technology blossomed.
            Inspired by the wonders of software, I set out to create impactful digital solutions that merge minimalism with functionality.
            When I'm not coding, you'll find me immersed in books, playing sports, or solving puzzles.
          </p>
        </div>
        <div className={styles.infoSection}>
          <h3>Personal Info</h3>
          <ul>
            <li><strong>Email:</strong> frankyfq2@gmail.com</li>
            <li><strong>Date of Birth:</strong> 12-02-2005</li>
            <li><strong>Nationality:</strong> Nigerian</li>
          </ul>
        </div>
        <div className={styles.interestsSection}>
          <h3>Interests and Avocations</h3>
          <div className={styles.cardsContainer}>
            <div className={styles.cardItem}>
              <img src="../../../8541623_book_reader_icon.png" alt="Reading" />
              <p>Reading</p>
            </div>
            <div className={styles.cardItem}>
              <img src="../../../4042269_activity_exercise_football_healthy life_lifestyle_icon.png" alt="Football" />
              <p>Football</p>
            </div>
            <div className={styles.cardItem}>
              <img src="../../../7695340_planning_strategy_business_chess_plan_icon.png" alt="Chess" />
              <p>Chess</p>
            </div>
            <div className={styles.cardItem}>
              <img src="../../../172596_tennis_icon.png" alt="Tennis" />
              <p>Tennis</p>
            </div>
            <div className={styles.cardItem}>
              <img src="../../../1291746_basketball_field_game_sport_tournament_icon.png" alt="Basketball" />
              <p>Basketball</p>
            </div>
            <div className={styles.cardItem}>
              <img src="../../../3746536_cooking_kitchen_spatula_utensils_icon.png" alt="Cooking" />
              <p>Cooking</p>
            </div>
            <div className={styles.cardItem}>
              <img src="../../../rubiks_cube_15542.png" alt="Cubing" />
              <p>Cubing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;