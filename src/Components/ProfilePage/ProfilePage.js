import React from 'react';
// Import styles
import styles from './ProfilePage.module.css';

const ProfilePage = () => (
  <div className={styles['page-container']}>
    <ul className={styles.list}>
      <span className={styles['list-title']}>My Missions</span>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Telstar</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>SES</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>AsiaSat</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>ABS</span>
      </li>
    </ul>
    <ul className={styles.list}>
      <span className={styles['list-title']}>My Rockets</span>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Falcon 9</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Falcon Heavy</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Starship</span>
      </li>
    </ul>
  </div>
);

export default ProfilePage;
