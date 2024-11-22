import React from 'react';
import styles from '../../Styles/CV.module.css';

function CV() {
    return (
      <div className={styles.cv}>
        <div className={styles.cvCard}>
        <h2 className={styles.title}>My CV</h2>
        <p className={styles.description}>
          Here's an overview of my CV. Scroll below to check it out!
        </p>

        <div className={styles.cvImageContainer}>
          <img
            src="../../../Franky-John Feson CV Improved .pdf_20240423_184849_0000.pdf.png" 
            alt="My CV"
            className={styles.cvImage}
          />
        </div>
        </div>
     </div>
    )
}

export default CV;