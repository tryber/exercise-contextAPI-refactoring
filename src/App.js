import React, { useState } from 'react';
import AppContext from './context/AppContext';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

function App() {
  const [traffic, setTraffic] = useState({ color: 'red' });
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const context = {
    traffic,
    setTraffic,
    cars,
    setCars,
  }

  return (
    <AppContext.Provider value={ context }>
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
