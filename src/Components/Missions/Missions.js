import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { fetchMissions } from '../../redux/configureStore';
// import styling
import styles from './Missions.module.css';

const Missions = () => {
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
              <th scope="row"><h5>{mission.name}</h5></th>
              <td>
                <p>
                  {mission.description}
                </p>
              </td>
              <td>
                { mission.joined ? <Badge className="m-2" bg="active" style={{ backgroundColor: '#18a2b8' }}>Active Member</Badge>
                  : <Badge className="m-2 " bg="secondary">NOT A MEMBER</Badge>}
                {' '}
              </td>
              <td>
                <Button className="m-4" variant="outline-danger text-nowrap">Leave Mission</Button>
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
