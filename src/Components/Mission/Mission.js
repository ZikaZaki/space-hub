import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { toggleMission } from '../../redux/missions/missions';
// import styles
import styles from './Mission.module.css';

const Mission = ({
  id,
  name,
  description,
  joined,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <th scope="row"><h5>{ name }</h5></th>
      <td>
        <p>{ description }</p>
      </td>
      <td>
        { joined ? <Badge className="m-2" bg="active" style={{ backgroundColor: '#18a2b8' }}>Active Member</Badge>
          : <Badge className="m-2 " bg="secondary">NOT A MEMBER</Badge> }
        {' '}
      </td>
      <td>
        { joined
          ? (
            <button
              type="button"
              className={styles['leave-btn']}
              onClick={() => dispatch(toggleMission(id))}
            >
              Leave Mission
            </button>
          )
          : (
            <button
              type="button"
              className={styles['join-btn']}
              onClick={() => dispatch(toggleMission(id))}
            >
              Join Mission
            </button>
          )}
        {' '}
      </td>
    </>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default Mission;
