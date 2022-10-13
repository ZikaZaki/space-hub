import React from 'react';
// import styles
import styles from './Dragon.module.css';
import dragonImg from './dragon.jpg';

const Dragon = () => {
  return (
    <div className={styles['dragon-container']}>
      <img className={styles['dragon-img']} src={dragonImg} alt="dragon" />
      <div className={styles['dragon-info']}>
        <div className={styles['dragon-name']}>
          <h2>Dragon Name</h2>
          <span className={styles.badge}>Reserved</span>
        </div>
        <p>
            Dragon Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dragon Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dragon Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button type="button" className={styles['reserve-btn']}>Reserve Dragon</button>
      </div>
    </div>
  );
};

export default Dragon;
