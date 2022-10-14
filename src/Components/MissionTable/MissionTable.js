import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchMissions } from '../../redux/configureStore';
import Mission from '../Mission/Mission';
// import styles
import styles from './MissionTable.module.css';

const MissionTable = () => {
  // Get missions from the store
  const missions = useSelector((state) => state.missions);
  // Get dispatch function
  const dispatch = useDispatch();
  // Get missions from the API
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className={styles['missions-container']}>
      <Table striped bordered hover responsive="xl" size="sm">
        <thead>
          <tr>
            <th className="p-2" scope="col"><h4>Mission</h4></th>
            <th className="p-2" scope="col"><h4>Description</h4></th>
            <th className="p-2" scope="col"><h4>Status</h4></th>
            <th className="p-2" scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          { missions && missions.map((mission) => (
            <tr key={mission.id}>
              <Mission
                id={mission.id}
                name={mission.name}
                description={mission.description}
                joined={mission.joined}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionTable;
