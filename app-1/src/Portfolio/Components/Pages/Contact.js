import React from 'react';
import styles from '../../Styles/Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
     <h2>Contact Me</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" placeholder="Your Email" />
        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className={styles.socials}>
        <h3>Socials</h3>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/fj_feson?igsh=aGR4MG1hazY5MGRr" target="_blank" rel="noopener noreferrer">
            <img src="../../../1298747_instagram_brand_logo_social media_icon.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/franky.feson.73?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
            <img src="../../../5296499_fb_facebook_facebook logo_icon.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/franky-feson-391456336/" target="_blank" rel="noopener noreferrer">
            <img src="../../../1829957_brand_linkedin_logo_network_social_icon.png" alt="LinkedIn" />
          </a>
          <a href="mailto:frankyfq2@gmail.com">
            <img src="../../../7089163_gmail_google_icon.png" alt="Gmail" />
          </a>
          <a href="https://github.com/Franky1202" target="_blank" rel="noopener noreferrer">
            <img src="../../../317712_code repository_github_repository_resource_icon.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

