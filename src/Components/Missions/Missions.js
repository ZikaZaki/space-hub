import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
// import styling
import styles from './Missions.module.css';

const Missions = () => (
  <div className={styles['missions-container']}>
    <Table striped bordered hover responsive="xl" size="sm">
      <thead>
        <tr>
          <th className="w-20 p-2" scope="col"><h4>Mission</h4></th>
          <th className="w-20 p-2" scope="col"><h4>Description</h4></th>
          <th className="w-15 p-2" scope="col"><h4>Status</h4></th>
          <th className="w-15 p-2" scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="align-items-center" scope="row"><h5>Thaicom</h5></th>
          <td>
            <p>
              Thaicom is a series of communications satellites operated by
              Thaicom Public Company Limited. The first satellite in the series, Thaicom 1,
              was launched in 1997. The most recent satellite in the series,
              Thaicom 8, was launched in 2019.
            </p>
          </td>
          <td>
            <Badge className="align-self-center m-4" bg="secondary">NOT A MEMBER</Badge>
            {' '}
          </td>
          <td>
            <Button className="m-4" variant="outline-danger text-nowrap">Leave mission</Button>
            {' '}
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default Missions;
