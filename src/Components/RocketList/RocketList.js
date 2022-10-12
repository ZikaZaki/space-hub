import React from 'react';
import Rocket from '../Rocket/Rocket';
// import styles
import styles from './RocketList.module.css';

const RocketList = () => (
  <div className={styles['rocket-list-container']}>
    <ul className={styles['rocket-list']}>
      <li className={styles['list-item']}>
        <Rocket />
      </li>
      <li className={styles['rocket-item']}>
        <Rocket />
      </li>
      <li className={styles['rocket-item']}>
        <Rocket />
      </li>
      <li className={styles['rocket-item']}>
        <Rocket />
      </li>
    </ul>
  </div>
);

export default RocketList;
