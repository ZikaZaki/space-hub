import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import RocketList from './Components/RocketList/RocketList';
import Missions from './Components/Missions/Missions';
import ProfilePage from './Components/ProfilePage/ProfilePage';
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
