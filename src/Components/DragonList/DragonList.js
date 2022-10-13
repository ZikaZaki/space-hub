import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../../redux/configureStore';
import Dragon from '../Dragon/Dragon';
// import styles
import styles from './DragonList.module.css';

const DragonList = () => {
  // Get dragons from the store
  const dragons = useSelector((state) => state.dragons);
  // Get dispatch function
  const dispatch = useDispatch();
  // Get dragons from the API
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

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
