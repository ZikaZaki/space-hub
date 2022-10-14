import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from '../Dragon/Dragon';
// import styles
import styles from './DragonList.module.css';

const DragonList = () => {
  // Get dragons from the store
  const dragons = useSelector((state) => state.dragons);

  return (
    <div className={styles['dragon-list-container']}>
      <ul className={styles['dragon-list']}>
        {dragons && dragons.map((dragon) => (
          <li key={dragon.id} className={styles['dragon-item']}>
            <Dragon
              id={dragon.id}
              name={dragon.name}
              description={dragon.description}
              image={dragon.image}
              reserved={dragon.reserved}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragonList;
