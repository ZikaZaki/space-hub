import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../Rocket/Rocket';
// import styles
import styles from './RocketList.module.css';

const RocketList = () => {
  // Get rockets from the store
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className={styles['rocket-list-container']}>
      <ul className={styles['rocket-list']}>
        {rockets && rockets.map((rocket) => (
          <li key={rocket.id} className={styles['rocket-item']}>
            <Rocket
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              image={rocket.image}
              reserved={rocket.reserved}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketList;
