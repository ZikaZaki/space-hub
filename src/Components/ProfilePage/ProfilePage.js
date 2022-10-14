import React from 'react';
import { useSelector } from 'react-redux';
// Import styles
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const reservedRockets = useSelector((state) => state.rockets).filter((rocket) => rocket.reserved);
  const reservedDragons = useSelector((state) => state.dragons).filter((dragon) => dragon.reserved);
  const joinedMissions = useSelector((state) => state.missions).filter((mission) => mission.joined);

  return (
    <div className={styles['page-container']}>
      <ul className={styles.list}>
        <span className={styles['list-title']}>My Missions</span>
        { joinedMissions && joinedMissions.map((mission) => (
          <li key={mission.id} className={styles['list-item']}>
            <span className={styles['list-item-title']}>{mission.name}</span>
          </li>
        ))}
        { joinedMissions.length === 0 && <span className={styles['list-placeholder']}>...No missions joined</span> }
      </ul>
      <ul className={styles.list}>
        <span className={styles['list-title']}>My Rockets</span>
        { reservedRockets && reservedRockets.map((rocket) => (
          <li key={rocket.id} className={styles['list-item']}>
            <span className={styles['list-item-title']}>{rocket.name}</span>
          </li>
        ))}
        { reservedRockets.length === 0 && <span className={styles['list-placeholder']}>...No rockets reserved</span> }
      </ul>
      <ul className={styles.list}>
        <span className={styles['list-title']}>My Dragons</span>
        { reservedDragons && reservedDragons.map((dragon) => (
          <li key={dragon.id} className={styles['list-item']}>
            <span className={styles['list-item-title']}>{dragon.name}</span>
          </li>
        ))}
        { reservedDragons.length === 0 && <span className={styles['list-placeholder']}>...No dragons reserved</span> }
      </ul>
    </div>
  );
};

export default ProfilePage;
