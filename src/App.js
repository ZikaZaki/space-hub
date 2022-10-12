import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Rockets</h1>} />
        <Route path="/missions" element={<h1>Missions</h1>} />
        <Route path="/profile" element={<h1>My Profile</h1>} />
      </Routes>
    </div>
  );
}

export default App;
