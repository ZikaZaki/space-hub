import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleDragon } from '../../redux/dragons/dragons';
// import styles
import styles from './Dragon.module.css';

const Dragon = ({
  id,
  name,
  description,
  image,
  reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles['dragon-container']}>
      <img className={styles['dragon-img']} src={image} alt="dragon" />
      <div className={styles['dragon-info']}>
        <div className={styles['dragon-name']}>
          <h2>{name}</h2>
          {reserved && <span className={styles.badge}>Reserved</span>}
        </div>
        <p>{description}</p>
        {reserved ? <button type="button" className={styles['cancel-btn']} onClick={() => dispatch(toggleDragon(id))}>Cancel Reservation</button>
          : <button type="button" className={styles['reserve-btn']} onClick={() => dispatch(toggleDragon(id))}>Reserve Dragon</button>}
      </div>
    </div>
  );
};

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Dragon;
