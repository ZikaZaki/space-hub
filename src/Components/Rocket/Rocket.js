import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleRocket } from '../../redux/rockets/rockets';
// import styles
import styles from './Rocket.module.css';

const Rocket = ({
  id,
  name,
  description,
  image,
  reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles['rocket-container']}>
      <img className={styles['rocket-img']} src={image} alt="rocket" />
      <div className={styles['rocket-info']}>
        <div className={styles['rocket-name']}>
          <h2>{name}</h2>
          {reserved && <span className={styles.badge}>Reserved</span>}
        </div>
        <p>{description}</p>
        {reserved ? <button type="button" className={styles['cancel-btn']} onClick={() => dispatch(toggleRocket(id))}>Cancel Reservation</button>
          : <button type="button" className={styles['reserve-btn']} onClick={() => dispatch(toggleRocket(id))}>Reserve Rocket</button>}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
