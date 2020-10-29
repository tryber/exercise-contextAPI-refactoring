// src/App.js

import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';

function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
  );
}

export default App;
