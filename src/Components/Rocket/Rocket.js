import React from 'react';
// import styles
import styles from './Rocket.module.css';
import rocketImg from './rocket.jpg';

const Rocket = () => (
  <div className={styles['rocket-container']}>
    <img className={styles['rocket-img']} src={rocketImg} alt="rocket" />
    <div className={styles['rocket-info']}>
      <div className={styles['rocket-name']}>
        <h2>Falcon 9</h2>
        <span className={styles.badge}>Reserved</span>
      </div>
      <p>
        The Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable
        and safe transport of satellites and the Dragon spacecraft into orbit.
      </p>
      <button type="button" className={styles['reserve-btn']}>Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;
