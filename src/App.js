import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRockets, fetchDragons, fetchMissions } from './redux/configureStore';
import Navbar from './Components/Navbar/Navbar';
import RocketList from './Components/RocketList/RocketList';
import DragonList from './Components/DragonList/DragonList';
import MissionTable from './Components/MissionTable/MissionTable';
import ProfilePage from './Components/ProfilePage/ProfilePage';
// import styling
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  // Get rockets, dragons, and missions from the API
  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchDragons());
    dispatch(fetchMissions());
  }, [dispatch]);

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
