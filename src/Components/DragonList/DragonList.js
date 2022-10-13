import React from 'react';
import Dragon from '../Dragon/Dragon';
// import styles
import styles from './DragonList.module.css';

const DragonList = () => (
  <div className={styles['dragon-list-container']}>
    <ul className={styles['dragon-list']}>
      <li className={styles['dragon-item']}>
        <Dragon />
      </li>
      <li className={styles['dragon-item']}>
        <Dragon />
      </li>
      <li className={styles['dragon-item']}>
        <Dragon />
      </li>
    </ul>
  </div>
);

export default DragonList;
