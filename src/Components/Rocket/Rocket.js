import React from 'react';
import PropTypes from 'prop-types';
// import styles
import styles from './Rocket.module.css';
// import rocketImg from './rocket.jpg';

const Rocket = ({
  name,
  description,
  image,
  reserved,
}) => (
  <div className={styles['rocket-container']}>
    <img className={styles['rocket-img']} src={image} alt="rocket" />
    <div className={styles['rocket-info']}>
      <div className={styles['rocket-name']}>
        <h2>{name}</h2>
        {reserved && <span className={styles.badge}>Reserved</span>}
      </div>
      <p>{description}</p>
      <button type="button" className={styles['reserve-btn']}>Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
