/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RocketList from './components/RocketList/RocketList';
import Missions from './components/Missions/Missions';
import ProfilePage from './components/ProfilePage/ProfilePage';
// import styling
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['app-container']}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RocketList />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
