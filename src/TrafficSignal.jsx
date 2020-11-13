// src/TrafficSignal.jsx

import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  const { traffic, setTraffic } = useContext(AppContext);

  return (
    <div>
      <div className="button-container">
        <button onClick={() => setTraffic({ color: 'red' })} type="button">
          Red
        </button>
        <button onClick={() => setTraffic({ color: 'yellow' })} type="button">
          Yellow
        </button>
        <button onClick={() => setTraffic({ color: 'green' })} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(traffic.color)} alt="" />
    </div>
  );
};

export default TrafficSignal;
