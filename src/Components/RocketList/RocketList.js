import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/configureStore';
import Rocket from '../Rocket/Rocket';
// import styles
import styles from './RocketList.module.css';

const RocketList = () => {
  // Get rockets from the store
  const rockets = useSelector((state) => state.rockets);
  // Get dispatch function
  const dispatch = useDispatch();
  // Get rockets from the API
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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
