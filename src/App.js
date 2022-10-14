import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import RocketList from './Components/RocketList/RocketList';
import DragonList from './Components/DragonList/DragonList';
import MissionTable from './Components/MissionTable/MissionTable';
import ProfilePage from './Components/ProfilePage/ProfilePage';
// import styling
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['app-container']}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RocketList />} />
        <Route exact path="/dragons" element={<DragonList />} />
        <Route path="/missions" element={<MissionTable />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
