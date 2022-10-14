import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMission } from '../../redux/missions/missions';
import { toggleRocket } from '../../redux/rockets/rockets';
import { toggleDragon } from '../../redux/dragons/dragons';
// Import styles
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector((state) => state.rockets).filter((rocket) => rocket.reserved);
  const reservedDragons = useSelector((state) => state.dragons).filter((dragon) => dragon.reserved);
  const joinedMissions = useSelector((state) => state.missions).filter((mission) => mission.joined);

  return (
    <div className={styles['page-container']} data-testid="page-container">
      <ul className={styles.list}>
        <span className={styles['list-title']}>My Missions</span>
        { joinedMissions && joinedMissions.map((mission) => (
          <li key={mission.id} className={styles['list-item']}>
            <span className={styles['list-item-title']}>{mission.name}</span>
            {mission.joined && <button type="button" className={styles['cancel-btn']} onClick={() => dispatch(toggleMission(mission.id))}>Leave Mission</button>}
          </li>
        ))}
        { joinedMissions.length === 0 && <span className={styles['list-placeholder']}>...No missions joined</span> }
      </ul>
      <ul className={styles.list}>
        <span className={styles['list-title']}>My Rockets</span>
        { reservedRockets && reservedRockets.map((rocket) => (
          <li key={rocket.id} className={styles['list-item']}>
            <span className={styles['list-item-title']}>{rocket.name}</span>
            {rocket.reserved && <button type="button" className={styles['cancel-btn']} onClick={() => dispatch(toggleRocket(rocket.id))}>Cancel Reservation</button>}
          </li>
        ))}
        { reservedRockets.length === 0 && <span className={styles['list-placeholder']}>...No rockets reserved</span> }
      </ul>
      <ul className={styles.list}>
        <span className={styles['list-title']}>My Dragons</span>
        { reservedDragons && reservedDragons.map((dragon) => (
          <li key={dragon.id} className={styles['list-item']}>
            <span className={styles['list-item-title']}>{dragon.name}</span>
            {dragon.reserved && <button type="button" className={styles['cancel-btn']} onClick={() => dispatch(toggleDragon(dragon.id))}>Cancel Reservation</button>}
          </li>
        ))}
        { reservedDragons.length === 0 && <span className={styles['list-placeholder']}>...No dragons reserved</span> }
      </ul>
    </div>
  );
};

export default ProfilePage;
