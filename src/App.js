/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RocketList from './components/RocketList/RocketList';
import ProfilePage from './components/ProfilePage/ProfilePage';

// import styling
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['app-container']}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RocketList />} />
        <Route path="/missions" element={<h1>Missions</h1>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
